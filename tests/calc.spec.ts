const { test, expect } = require("@playwright/test");

test("is a scientific calc", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await expect(page).toHaveURL(/.*scientific/);
});

test("2+2 equals 4", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Plus" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByText("2 + 2");
  await page.getByText("= 4");
});

test("2*2 equals 4", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Multiplier" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByText("2  2");
  await page.getByText("= 4");
});
