 import {test, expect} from '@playwright/test';
 test('MouseActions', async({page}) => {
    await page.goto("https://demoblaze.com");
    await page.waitForTimeout(2000);
    await page.click('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)');
    await page.dblclick('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)');
    await page.hover('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)');
    await page.click('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)', {button: 'right'});
    await page.dragAndDrop('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)', 'body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)');
 });