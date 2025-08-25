import { test, expect } from "@playwright/test";
import { HomePage } from "../../src/pages/HomePage";

test("home loads", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.assertLoaded();
  await expect(page).toHaveURL(/\/?$/);
});
