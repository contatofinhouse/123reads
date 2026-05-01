import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Initialize Ratelimit only if Upstash variables are present
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
let ratelimit: Ratelimit | null = null;

if (redisUrl && redisToken) {
  ratelimit = new Ratelimit({
    redis: new Redis({ url: redisUrl, token: redisToken }),
    limiter: Ratelimit.slidingWindow(5, "1 m"), // 5 requests per minute per IP
  });
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    if (ratelimit) {
      const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please wait a minute before trying again." },
          { status: 429 }
        );
      }
    }

    const { prompt, filters, isLucky } = await req.json();

    // 2. Input Validation
    if (prompt && prompt.length > 100) {
      return NextResponse.json(
        { error: "Search prompt is too long. Please keep it under 100 characters." },
        { status: 400 }
      );
    }

    const filterContext = filters && filters.length > 0 
      ? `\nTake into consideration these filters/preferences: ${filters.join(", ")}.`
      : "";

    const randomSeed = Math.floor(Math.random() * 1000000);
    const userQuery = prompt 
      ? `User Query: "${prompt}"` 
      : `User requested a ${isLucky ? "COMPLETELY RANDOM and SURPRISING" : "curated"} recommendation list based on filters. Seed: ${randomSeed}`;

    const systemPrompt = `You are a book recommendation expert for '123reads'. 
The user is looking for book suggestions.
${filterContext}

Please respond with exactly FIVE (5) diverse book recommendations that match their query/filters. 
If it's a 'Feeling Lucky' request (prompt is empty), be creative and suggest hidden gems or very different genres.

Return the result STRICTLY as a JSON object with no markdown formatting, no backticks, just the raw JSON object containing a 'recommendations' key with an array of objects:
{
  "recommendations": [
    {
      "title": "Book Title",
      "author": "Author Name",
      "isbn": "13-digit ISBN",
      "rating": 4.5,
      "reason": "One short sentence why this is recommended."
    },
    ... (total 5)
  ]
}
IMPORTANT: "rating" must be the approximate Amazon/Goodreads rating as a number between 1.0 and 5.0 (e.g. 4.3).

${userQuery}`;

    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: systemPrompt,
    });

    const text = response.text || "{}";
    
    // Clean up potential markdown formatting from the response
    const cleanJsonString = text.replace(/```json/g, "").replace(/```/g, "").trim();

    try {
      const result = JSON.parse(cleanJsonString);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", cleanJsonString);
      return NextResponse.json({ error: "Failed to parse recommendation. Try again." }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: error.message || "An error occurred during recommendation." }, { status: 500 });
  }
}
