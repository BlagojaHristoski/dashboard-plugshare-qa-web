# PlugShare Dashboard Web Test Automation
Test automation using https://codecept.io framework.

# Installation

Run `npm install` inside a terminal from root directory to install node modules.
Run `npm install playwright` inside a terminal.
Run `npm install -g selenium-standalone`
Run `selenium-standalone install` in CMD for installing the webdrivers, `selenium-standalone start` to start the service

# Dependencies 
If using Webdriver then Java SDK must be available on the machine.
Allure reports also require Java.

# .env

To run tests locally you must provide a `.env` file in the root directory with following variables

(change the values as needed)

```
BASE_URL=dashboard-staging.plugshare.com
BROWSER_TYPE=chrome
BROWSER_WINDOW_SIZE=1920x1080
CAPTURE_VIDEO=false
ENABLE_ALLURE_REPORTS=false
FULL_PAGE_SCREENSHOT=false
PREPARE_TEST_BASE_IMAGE=false
SHOW_BROWSER=true

DASHBOARD_EMAIL=<your dashboard email>
DASHBOARD_PASSWORD=<your dashboard password>

TIMEOUT=30

```

# Running locally
To run all tests:
`npm run tests`

To run specific tag tests:
`npm run test <sometag>` 

or 
`npm run test:tagged <tag1> <tag2>`

To run a particular test file:

`npm run test ./tests/login/login.test.ts`

## Before creating a PR

1. Run the linter `npx eslint .` and fix any errors
2. Run the spell check `npx cspell "**"` and fix any errors