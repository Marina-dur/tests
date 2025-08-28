import { test } from "@playwright/test";
import { buttonMap } from "../helpers/buttonMap.js";
import { validateButtonNavigation } from "../../utils/buttonLinks.js";

for (const [pagePath, buttons] of Object.entries(buttonMap)) {
  test.describe(`Button tests for ${pagePath}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(pagePath);
    });

    for (const { selector, expectedUrl } of buttons) {
      test(`"${selector}" should go to ${expectedUrl}`, async ({ page }) => {
        return await validateButtonNavigation(page, selector, expectedUrl);
      });
    }
  });
}
