import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async assertLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Home|Welcome/i);
  }
}
