import { Page, expect } from "@playwright/test";

/**
 * Validates that a button redirects to the expected page.
 * Works for same-tab navigation or new-tab links.
 */
export async function validateButtonNavigation(
  page: Page,
  desc: string,
  selector: string,
  expectedUrl: string,
  opensInNewTab: boolean = false
) {
  const button = page.locator(selector);

  if (!expectedUrl || expectedUrl.trim() === "") {
    throw new Error(`❌ Missing expectedUrl for button: "${desc}" (${selector})`);
  }

  // Wait until button is attached and visible
  await button.waitFor({ state: "attached", timeout: 20000 });
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.classList.remove("elementor-invisible");
  }, selector);
  await button.scrollIntoViewIfNeeded();
  await button.waitFor({ state: "visible", timeout: 20000 });

  // Detect mobile
  const isMobile = page.viewportSize()?.width! <= 768;

  let targetPage: Page | null = null;

  if (opensInNewTab) {
    // Wait for popup/new tab
    [targetPage] = await Promise.all([
      page.waitForEvent("popup"),
      isMobile ? button.tap() : button.click(),
    ]);
  } else {
    // Same-tab click/tap
    if (isMobile) {
      await button.tap();
    } else {
      await button.click();
    }
    targetPage = page;
  }

  // Wait for navigation
  await targetPage.waitForLoadState("load");

  // Determine final URL
  const finalUrl = expectedUrl.startsWith("http")
    ? expectedUrl
    : new URL(expectedUrl, page.url()).href;

  // Assert URL
  await expect(targetPage).toHaveURL(finalUrl);

  console.log(`✅ Button "${desc}" navigated to ${finalUrl}`);
}
