import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/cart");
  }

  async assertItemInCart(name: string): Promise<void> {
    await expect(this.page.getByRole("row", { name: new RegExp(name, "i") })).toBeVisible();
  }
}
