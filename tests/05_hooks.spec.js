import { test, expect } from '@playwright/test';
test.beforeAll('before All', async () => {
    console.log('this is before all hook');
})
test.afterAll('after All', async () => {
    console.log('this is after all hook');
})

test.beforeEach('before Each', async () => {
    console.log('this before Each hook');
})

test.afterEach('after Each', async () => {
    console.log('this after Each hook');
})
test('Hooks practice 1', async ({ page }) => {
    console.log('test1');
});
test('Hooks practice 2', async ({ page }) => {
    console.log('test2');
});