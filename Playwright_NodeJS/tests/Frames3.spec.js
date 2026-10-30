import {test, expect} from '@playwright/test';

test('Frames', async({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    await page.waitForTimeout(2000);
    console.log(page.frames().length);
    page.frames().forEach(frame => {
        console.log(frame.name());
        console.log(frame.url());
    });
    const frame3 = await page.frame('https://docs.oracle.com/javase/8/docs/api/overview-frame.html');
    await frame3?.locator("a[href='java/applet/package-frame.html']").click();
    await page.waitForTimeout(2000);
});