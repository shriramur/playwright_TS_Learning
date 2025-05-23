import { test, expect } from '@playwright/test';

test('Date picker test', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');
    const frame = page.frameLocator('.demo-frame');

    await frame.locator('#datepicker').click();

    const left = frame.locator('[title="Prev"]');
    const right = frame.locator('[title="Next"]');
    const yearText = frame.locator('.ui-datepicker-year');
    const monthText = frame.locator('.ui-datepicker-month');
    

    const months = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    };

    const userDate = '5/1/2024'; // MM/DD/YYYY
    const [usermonthStr, userday, useryearStr] = userDate.split('/');
    const usermonth = parseInt(usermonthStr, 10);
    const useryear = parseInt(useryearStr, 10);
    const dayText = frame.locator(`//td/a[@data-date="${userday}"]`);

    // Adjust year
    while (true) {
        const currentYear = parseInt(await yearText.textContent(), 10);
        if (currentYear === useryear) break;
        if (currentYear < useryear) {
            await right.click();
        } else {
            await left.click();
        }
    }

    // Adjust month
    while (true) {
        const currentMonthStr = await monthText.textContent(); // e.g., "May"
        const currentMonth = months[currentMonthStr];
        if (currentMonth === usermonth) break;
        if (currentMonth < usermonth) {
            await right.click();
        } else {
            await left.click();
        }
    }

    // Click the day
    await dayText.click();
    await page.pause(4000);
});
