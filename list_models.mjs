import { GoogleGenAI } from "@google/genai";
import fs from "fs";

// Load .env.local manually
const envFile = fs.readFileSync(".env.local", "utf-8");
const envConfig = envFile.split('\n').reduce((acc, line) => {
    const [key, value] = line.split('=');
    if (key && value) acc[key.trim()] = value.trim();
    return acc;
}, {});

const ai = new GoogleGenAI({ apiKey: envConfig.GEMINI_API_KEY });

async function run() {
  console.log("Fetching models...");
  try {
    // The google/genai SDK provides an ai.models.list() or equivalent method.
    // Based on the new SDK:
    const response = await ai.models.list();
    for await (const model of response) {
        console.log(`- ${model.name} (${model.displayName})`);
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

run();
