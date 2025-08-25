import { chromium } from "playwright";
import { getHtml } from "../src/utils/html.js";
import { aiCall } from "../tests/ai/text-quality.spec.js";

export async function runTest(url: string): Promise<string> {
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

  return `
Extracted text preview: ${allText.slice(0, 300)}
Full text length: ${allText.length}
AI Analysis Result:
${response}
`;
}
