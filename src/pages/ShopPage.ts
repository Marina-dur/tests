import { Page, expect } from "@playwright/test";

export class ShopPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/shop");
  }

  async search(term: string): Promise<void> {
    await this.page.getByRole("searchbox").fill(term);
    await this.page.keyboard.press("Enter");
  }

  async assertResultsVisible(): Promise<void> {
    await expect(this.page.getByRole("main")).toContainText(/results|products/i);
  }
}
