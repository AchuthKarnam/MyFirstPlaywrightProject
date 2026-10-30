# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblaze-product-cart.spec.js >> browse phones and add Samsung Galaxy S6 to cart
- Location: tests\demoblaze-product-cart.spec.js:3:5

# Error details

```
Error: Samsung Galaxy S6 should be listed under Phones

expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Samsung galaxy s6', exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Samsung Galaxy S6 should be listed under Phones getByRole('link', { name: 'Samsung galaxy s6', exact: true }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'Samsung galaxy s6', exact: true })

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Third slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('browse phones and add Samsung Galaxy S6 to cart', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/');
  5  | 
  6  |   const carousel = page.locator('#carouselExampleIndicators');
  7  |   await expect(carousel, 'Homepage carousel should be ready').toBeVisible();
  8  | 
  9  |   await carousel.getByRole('button', { name: 'Previous' }).click();
  10 |   await carousel.getByRole('button', { name: 'Next' }).click();
  11 |   await carousel.getByRole('button', { name: 'Next' }).click();
  12 | 
  13 |   await page.getByRole('link', { name: 'Phones', exact: true }).click();
  14 |   const productLink = page.getByRole('link', {
  15 |     name: 'Samsung galaxy s6',
  16 |     exact: true,
  17 |   });
> 18 |   await expect(productLink, 'Samsung Galaxy S6 should be listed under Phones').toBeVisible();
     |                                                                                ^ Error: Samsung Galaxy S6 should be listed under Phones
  19 |   await productLink.click();
  20 | 
  21 |   await expect(
  22 |     page.getByText('The Samsung Galaxy S6 is'),
  23 |     'Samsung Galaxy S6 product description should be visible',
  24 |   ).toBeVisible();
  25 | 
  26 |   let alertMessage;
  27 |   page.once('dialog', async (dialog) => {
  28 |     alertMessage = dialog.message();
  29 |     await dialog.accept();
  30 |   });
  31 | 
  32 |   await page.getByRole('link', { name: 'Add to cart', exact: true }).click();
  33 |   expect(alertMessage, 'Add-to-cart alert should confirm the product was added').toBe(
  34 |     'Product added',
  35 |   );
  36 | });
  37 | 
```