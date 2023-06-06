const { test, expect } = require("@playwright/test");

test("Able to login with valid credentials", async ({ page }) => {
  await page.goto("https://odyssey.wildcodeschool.com/");
  await page.pause();
});
