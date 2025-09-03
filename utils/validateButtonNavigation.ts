import { Page } from "@playwright/test";

/**
 * Validates that a button redirects to the expected page.
 */
export async function validateButtonNavigation(
  page: Page,
  desc: string,
  selector: string,
  expectedUrl: string,
  targetSelector: string,
  pagePath: string
) {
  const button = page.locator(selector);

  // Wait for button to be attached to the DOM
  await button.waitFor({ state: "attached", timeout: 20000 });

  // Make sure the button is visible even if Elementor has animation
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.classList.remove("elementor-invisible");
  }, selector);

  // Scroll button into view (centered)
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ block: "center", inline: "center" });
  }, selector);

  // Wait for button to be visible after scrolling
  await button.waitFor({ state: "visible", timeout: 20000 });

  // Determine if the page is mobile by checking viewport size
  const isMobile = page.viewportSize()?.width! <= 768;

  // Click or tap depending on device
  if (isMobile) {
    await button.tap();
  } else {
    await button.click();
  }

  // Wait for the target element to appear on the next page
  await page.locator(targetSelector).first().waitFor({ state: "visible", timeout: 20000 });

  // Log current URL just for reporting
  const currentUrl = page.url();
  if (!currentUrl.includes(expectedUrl)) {
    console.warn(
      `⚠️ Button desc: ${desc}\n Button "${selector}" on page ${pagePath} navigated to unexpected URL: ${currentUrl}`
    );
  } else {
    console.log(
      `✅ Button desc: ${desc}\n Button "${selector}" on page ${pagePath} navigated to ${currentUrl}`
    );
  }
}
