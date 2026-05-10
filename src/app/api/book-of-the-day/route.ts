import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const CACHE_FILE = path.join(process.cwd(), "book-of-the-day.json");

interface BookOfTheDay {
  date: string;
  title: string;
  author: string;
  isbn: string;
  reason: string;
}

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

function readCache(): BookOfTheDay | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, "utf-8");
      const data: BookOfTheDay = JSON.parse(raw);
      if (data.date === getTodayStr()) return data;
    }
  } catch {
    // ignore corrupt cache
  }
  return null;
}

function writeCache(data: BookOfTheDay): void {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  // Check cache first
  const cached = readCache();
  if (cached) {
    return NextResponse.json(cached);
  }

  // Generate via Gemini
  try {
    const today = getTodayStr();
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );

    const prompt = `You are a book recommendation expert. Pick ONE exceptional book as the "Book of the Day" for day #${dayOfYear} of the year.
Choose something surprising, not the most obvious bestseller. Pick from a wide range of genres and eras.

Return STRICTLY a JSON object with no markdown:
{
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "13-digit ISBN",
  "reason": "2-3 sentences explaining why this is a great pick today."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
    });

    const text = response.text || "{}";
    const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const result = JSON.parse(clean);

    const bookOfDay: BookOfTheDay = {
      date: today,
      title: result.title,
      author: result.author,
      isbn: result.isbn || "",
      reason: result.reason,
    };

    writeCache(bookOfDay);
    return NextResponse.json(bookOfDay);
  } catch (error: any) {
    console.error("Book of the Day error:", error);
    // Return a hardcoded fallback if Gemini fails
    return NextResponse.json({
      date: getTodayStr(),
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      isbn: "9780062316097",
      reason: "A sweeping journey through the history of our species that challenges everything you thought you knew about being human.",
    });
  }
}
