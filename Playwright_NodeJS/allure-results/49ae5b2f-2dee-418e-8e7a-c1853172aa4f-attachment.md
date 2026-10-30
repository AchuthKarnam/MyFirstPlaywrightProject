# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblaze-product-cart.spec.js >> browse phones and add Samsung Galaxy S6 to cart
- Location: tests\demoblaze-product-cart.spec.js:3:5

# Error details

```
Error: Add-to-cart alert should confirm the product was added

expect(received).toBe(expected) // Object.is equality

Expected: "Product added"
Received: undefined
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - generic [ref=f1e3]:
      - link "PRODUCT STORE" [ref=f1e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f1e7]:
        - listitem [ref=f1e8]:
          - link "Home (current)" [ref=f1e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f1e10]: (current)
        - listitem [ref=f1e11]:
          - link "Contact" [ref=f1e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f1e13]:
          - link "About us" [ref=f1e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f1e15]:
          - link "Cart" [ref=f1e16] [cursor=pointer]:
            - /url: cart.html
        - listitem [ref=f1e17]:
          - link "Log in" [ref=f1e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=f1e19]:
          - link "Sign up" [ref=f1e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=f1e22]:
    - generic [ref=f1e25]:
      - list [ref=f1e26]:
        - listitem [ref=f1e27] [cursor=pointer]
        - listitem [ref=f1e28] [cursor=pointer]
        - listitem [ref=f1e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=f1e32]:
      - heading "Samsung galaxy s6" [level=2] [ref=f1e33]
      - separator [ref=f1e34]
      - heading "$360 *includes tax" [level=3] [ref=f1e35]
      - separator [ref=f1e36]
      - generic [ref=f1e37]:
        - list:
          - listitem
        - generic [ref=f1e39]:
          - strong [ref=f1e40]: Product description
          - paragraph [ref=f1e41]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
      - separator [ref=f1e42]
      - link "Add to cart" [active] [ref=f1e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=f1e47]:
    - generic [ref=f1e50]:
      - heading "About Us" [level=4] [ref=f1e51]
      - paragraph [ref=f1e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e55]:
      - heading "Get in Touch" [level=4] [ref=f1e56]
      - paragraph [ref=f1e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e58]: "Phone: +440 123456"
      - paragraph [ref=f1e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e63]
  - contentinfo [ref=f1e65]:
    - paragraph [ref=f1e66]: Copyright © Product Store
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
  18 |   await expect(
  19 |     productLink,
  20 |     'Samsung Galaxy S6 should be listed under Phones',
  21 |   ).toBeVisible({ timeout: 15_000 });
  22 |   await productLink.click();
  23 | 
  24 |   await expect(
  25 |     page.getByText('The Samsung Galaxy S6 is'),
  26 |     'Samsung Galaxy S6 product description should be visible',
  27 |   ).toBeVisible({ timeout: 15_000 });
  28 | 
  29 |   let alertMessage;
  30 |   page.once('dialog', async (dialog) => {
  31 |     alertMessage = dialog.message();
  32 |     await dialog.accept();
  33 |   });
  34 | 
  35 |   await page.getByRole('link', { name: 'Add to cart', exact: true }).click();
> 36 |   expect(alertMessage, 'Add-to-cart alert should confirm the product was added').toBe(
     |                                                                                  ^ Error: Add-to-cart alert should confirm the product was added
  37 |     'Product added',
  38 |   );
  39 | });
  40 | 
```