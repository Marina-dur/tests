import { test } from "@playwright/test";
import { buttonMap } from "../helpers/buttonMap.js";
import { validateButtonNavigation } from "../../utils/validateButtonNavigation.js";

test.describe("Button Navigation Tests", () => {
  for (const [pagePath, buttons] of Object.entries(buttonMap)) {
    for (const { desc, selector, expectedUrl, opensInNewTab } of buttons) {
      test(`Button "${desc}" on page "${pagePath}" should go to "${expectedUrl}"`, async ({
        page,
      }) => {
        await page.goto(pagePath);
        await validateButtonNavigation(page, desc, selector, expectedUrl, opensInNewTab);
      });
    }
  }
});
