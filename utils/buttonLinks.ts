import { Page } from "@playwright/test";

/**
 * Validates that a button redirects to the expected page.
 */
export async function validateButtonNavigation(page: Page, selector: string, expectedUrl: string) {
  const button = page.locator(selector);

  if (!(await button.isVisible())) {
    throw new Error(`Button not visible: ${selector}`);
  }

  await Promise.all([page.waitForNavigation({ timeout: 5000 }), button.click()]);

  const currentUrl = page.url();
  if (!currentUrl.includes(expectedUrl)) {
    throw new Error(`❌ Button "${selector}" did not navigate correctly. 
      Expected: ${expectedUrl}, Got: ${currentUrl}`);
  }

  console.log(`✅ Button "${selector}" navigated to ${currentUrl}`);
}
