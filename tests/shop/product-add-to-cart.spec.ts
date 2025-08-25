import { test } from "@playwright/test";
import { CartPage } from "../../src/pages/CartPage.js";
import { ProductPage } from "../../src/pages/ProductPage.js";

test("product add to cart", async ({ page }) => {
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await product.goto("sample-product"); // change slug to a real product
  await product.addToCart();

  await cart.goto();
  await cart.assertItemInCart("sample product");
});
