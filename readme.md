 // More command line args can be found here
 https://playwright.dev/docs/test-cli
 
 npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

TO run on specific test:
    npx playwright test first_script.spec

    TO run on specific browser:
    npx playwright test first_script.spec --project='firefox'

    To run test with specific tag like @smoke, @regression. Refer to 14_tags.spec.js
    npx playwright test --grep '@Smoke' --project='firefox'

    ==============================================
    Notes:
    To run a specific test for specified number of times, this can also be configured from config as well:
npx playwright test 02_first_script.spec --repeat-each=3


Retries: This can also be set using config
npx playwright test tests/02_first_script.spec.js --retries=2


To run last failed tests:
npx playwright test --last-failed

to run parallely with specified number of workere: 
npx playwright test 20_testReportrs --workers 4


allure report
allure generate allure-results --clean


only changed tests running:
npx playwright test --only-changed // this will run the test wich have only chnaged based on git.

