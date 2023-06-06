import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://malty-brewdog.netlify.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Malty/);
});

test("browse button", async ({ page }) => {
  await page.goto("https://malty-brewdog.netlify.app/");

  // Click the get started link.
  await page.getByRole("button", { name: /browse all beer/i }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*all/);
});

test("search button", async ({ page }) => {
  await page.goto("https://malty-brewdog.netlify.app/");

  // Click the get started link.
  await page.getByRole("button", { name: /search a beer/i }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*search/);

  await page.getByRole("img", { name: "deepBitter logo" }).click();
});

test("display search result", async ({ page }) => {
  await page.goto("https://malty-brewdog.netlify.app/");

  // Click the get started link.
  await page.getByRole("button", { name: /search a beer/i }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*search/);

  // Click on a logo
  await page.getByRole("img", { name: "deepBitter logo" }).click();

  // Click on submit button
  await page.getByRole("button", { name: /give me beers/i }).click();

  // Expects the URL to contain results.
  await expect(page).toHaveURL(/.*results/);

  // Expects 33 results
  await page.getByText("33 results");
});
