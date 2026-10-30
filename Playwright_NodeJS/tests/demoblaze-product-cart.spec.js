import { test, expect } from '@playwright/test';

test('browse phones and add Samsung Galaxy S6 to cart', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  const carousel = page.locator('#carouselExampleIndicators');
  await expect(carousel, 'Homepage carousel should be ready').toBeVisible();

  await carousel.getByRole('button', { name: 'Previous' }).click();
  await carousel.getByRole('button', { name: 'Next' }).click();
  await carousel.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('link', { name: 'Phones', exact: true }).click();
  const productLink = page.getByRole('link', {
    name: 'Samsung galaxy s6',
    exact: true,
  });
  await expect(
    productLink,
    'Samsung Galaxy S6 should be listed under Phones',
  ).toBeVisible({ timeout: 15_000 });
  await productLink.click();

  await expect(
    page.getByText('The Samsung Galaxy S6 is'),
    'Samsung Galaxy S6 product description should be visible',
  ).toBeVisible({ timeout: 15_000 });

  const alertMessagePromise = page.waitForEvent('dialog', { timeout: 15_000 }).then(
    async (dialog) => {
      const message = dialog.message();
      await dialog.accept();
      return message;
    },
  );
  await page.getByRole('link', { name: 'Add to cart', exact: true }).click();
  const alertMessage = await alertMessagePromise;
  expect(alertMessage, 'Add-to-cart alert should confirm the product was added').toBe(
    'Product added',
  );
});
