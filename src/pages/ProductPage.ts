import { Page, expect } from "@playwright/test";

export class ProductPage {
  constructor(private readonly page: Page) {}

  async goto(slug: string): Promise<void> {
    await this.page.goto(`/product/${slug}`);
  }

  async addToCart(): Promise<void> {
    await this.page.getByRole("button", { name: /add to cart/i }).click();
  }

  async assertPriceVisible(): Promise<void> {
    await expect(this.page.getByText(/\$\d+/)).toBeVisible();
  }
}
