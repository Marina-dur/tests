import { test } from "@playwright/test";
import { buttonMap } from "../helpers/buttonMap.js";
import { validateButtonNavigation } from "../../utils/validateButtonNavigation.js";

test.describe("Button Navigation Tests", () => {
  // Loop over all pages in the map
  for (const [pagePath, buttons] of Object.entries(buttonMap)) {
    // Loop over each button on the page
    for (const { desc, selector, expectedUrl, targetSelector } of buttons) {
      test(`Button "${selector}" on page "${pagePath}" should go to "${expectedUrl}"`, async ({
        page,
      }) => {
        // Navigate to the page
        await page.goto(pagePath);

        // Validate the button navigation
        await validateButtonNavigation(page, desc, selector, expectedUrl, targetSelector, pagePath);
      });
    }
  }
});
