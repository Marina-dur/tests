import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/checkout");
  }

  async fillGuestDetails(details: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postcode: string;
  }): Promise<void> {
    await this.page.getByLabel(/email/i).fill(details.email);
    await this.page.getByLabel(/first name/i).fill(details.firstName);
    await this.page.getByLabel(/last name/i).fill(details.lastName);
    await this.page.getByLabel(/address/i).fill(details.address);
    await this.page.getByLabel(/city/i).fill(details.city);
    await this.page.getByLabel(/postcode|zip/i).fill(details.postcode);
  }

  async placeOrder(): Promise<void> {
    await this.page.getByRole("button", { name: /place order|pay now/i }).click();
  }

  async assertOrderReceived(): Promise<void> {
    await expect(this.page.getByText(/order received|thank you/i)).toBeVisible();
  }
}
