import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
    ['html'],
    ['list'],
    //['dot'],
    ['json', { outputFile: 'test-results/json-test-report.json' }],
    ['junit', { outputFile: 'test-results/junit-test-report.xml' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    headless: false,
    video: 'on', //Record video for each test. Default is off, if you want to record video for each test, set it to 'on' or 'retain-on-failure'
    screenshot: 'on',
    //testIdAttribute: 'ng-model'
    actionTimeout: 5000, //Timeout for each action like click, fill, etc. Default is 30 secs, if the action takes more than this given timeout, TC will fail with timeout exception.
  },
  //timeout: 2000,// Global timeout on all tests. Default is 30 secs, if the test execution takes more than this given timeout, TC will fail with timeout exception

  expect : {
    timeout: 1000, //Applicable to all Expect. Waits up to specified seconds for the element to have the expected text, otherwise throws an timeout error.
  },
  globalTimeout: 600000, //Global timeout on all tests. Default is 30 secs, if the total test execution takes more than this given timeout, TCs will fail with timeout exception
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
