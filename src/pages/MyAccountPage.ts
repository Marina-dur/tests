import { Page, expect } from "@playwright/test";

export class MyAccountPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/my-account");
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.getByLabel(/username|email/i).fill(username);
    await this.page.getByLabel(/password/i).fill(password);
    await this.page.getByRole("button", { name: /log in|login/i }).click();
  }

  async assertLoggedIn(): Promise<void> {
    await expect(this.page.getByText(/dashboard|hello/i)).toBeVisible();
  }
}
