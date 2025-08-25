import { chromium } from "playwright";
import { getHtml } from "../utils/html.js";
import { aiCall } from "./ai.js";

export async function runTextCheck(url: string): Promise<string> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const rawHTML = await page.content();
  const allText = getHtml(rawHTML);

  const response = await aiCall(
    `Please check this ${url} text for spelling mistakes and write a description where the mistake is`,
    allText
  );

  await browser.close();

  return `\nExtracted text preview: ${allText.slice(0, 300)}\nFull text length: ${allText.length}\nAI Analysis Result:\n${response}\n`;
}
