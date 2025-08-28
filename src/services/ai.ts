import OpenAI from "openai";
import { getConfig } from "../config/env.js";

const config = getConfig();

const openai = new OpenAI({
  apiKey: config.openAiKey,
});

export async function aiCall(message: string, value: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a QA assistant verifying website text content." },
      { role: "user", content: `${message}:\n\n${value}` },
    ],
  });

  return response.choices[0]?.message?.content ?? "";
}
