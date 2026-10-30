import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //await page.goto('https://www.google.com/search?q=practice+automation+testing+site&oq=practice+automation+testing+site&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTExMzEzajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
  //await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dpractice%2Bautomation%2Btesting%2Bsite%26oq%3Dpractice%2Bautomation%2Btesting%2Bsite%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCTExMzEzajBqMqgCALACAQ%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DMurHaufhMbni2roPj8fsyQM&q=EhAkAUkAiPVBESxkh4X6SLu3GLPUn9YGIjAjGAOpb-Oi9JFM-y0AMs7TpRGv4Jmg8SzW0_jDs4ASN38ki-BFkiMDLLDWAbeOdRkyAVJaAUNgn-aa6_n-ka-5AQ');
  //await page.locator('iframe[name="a-9crjwhl4i2bb"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="5"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="2"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="1"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="2"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="5"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="1"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="4"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="6"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().locator('[id="0"]').click();
  //await page.locator('iframe[name="c-9crjwhl4i2bb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  //await page.getByRole('link', { name: 'Automation Testing Practice Automation Testing Practice https://' }).click();
  await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html')

  await page.screenshot({
        path: 'C:\\Users\\Achuth\\OneDrive\\Desktop\\Playwright_NodeJS\\SS\\screenshot3.jpeg'
  });

  await page.screenshot({
    path: 'C:\\Users\\Achuth\\OneDrive\\Desktop\\Playwright_NodeJS\\SS\\screenshot4.jpeg', fullPage: true
  });

  const DynamicButton = page.getByRole('heading', { name: 'Dynamic Button' });
  await DynamicButton.screenshot({
    path: 'C:\\Users\\Achuth\\OneDrive\\Desktop\\Playwright_NodeJS\\SS\\screenshot5.jpeg'
  });

  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Achuth');
  await page.getByRole('textbox', { name: 'Enter Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('achuthkulkarni9@gmail.com');
  await page.getByRole('textbox', { name: 'Enter EMail' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9030130193');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address:' }).fill('flat 401, Sadhguru Homes 2, Nallagandla, Hyderabad\ntelangana\npin 500019');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Colors:').selectOption(['red', 'green']);
  await page.getByLabel('Sorted List:').selectOption('cat');
  await page.getByLabel('Sorted List:').selectOption(['cat', 'cheetah']);
  await page.getByLabel('Sorted List:').selectOption(['cat', 'cheetah', 'dog']);
  await page.locator('#datepicker').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '2', exact: true }).click();
  await page.getByPlaceholder('Start Date').fill('2026-10-01');
  await page.getByPlaceholder('End Date').fill('2026-10-04');
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByText('Gender:')).toBeVisible();
  await expect(page.getByLabel('Country:')).toHaveValue('usa');
  //await expect(page.getByLabel('Colors:')).screenshot({ path: 'tests/screenshots/Colors.png' });
});