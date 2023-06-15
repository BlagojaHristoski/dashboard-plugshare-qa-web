require('ts-node/register')

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const currentDate = new Date()
  .toLocaleString(
    'en-ca', // YYYY-MM-DD, HH:mm:ss
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      year: 'numeric',
    },
  )
  .replace(/-/g, '.')
  .replace(/, /g, '-')

console.info('current date:', currentDate)

const BASE_URL = process.env.BASE_URL || ''
const BROWSER_TYPE = process.env.BROWSER_TYPE || 'chromium'
const BROWSER_WINDOW_SIZE = process.env.BROWSER_WINDOW_SIZE || '1920x1080'

const SCREENSHOT_SUBFOLDER = `${BROWSER_TYPE}/${BROWSER_WINDOW_SIZE}`

console.info('BROWSER_TYPE', BROWSER_TYPE)
console.info('BROWSER_WINDOW_SIZE', BROWSER_WINDOW_SIZE)
console.info('SCREENSHOT_SUBFOLDER', SCREENSHOT_SUBFOLDER)


exports.config = {
  helpers: {
    FileSystem: {},
    Playwright: {
      browser: BROWSER_TYPE,
      fullPageScreenshots: process.env.FULL_PAGE_SCREENSHOT === 'true',
      show: process.env.SHOW_BROWSER === 'true',
      url: `https://${BASE_URL}`,
      video: process.env.CAPTURE_VIDEO === 'true',
      waitForAction: 200,
      waitForNavigation: 'networkidle',
      windowSize: BROWSER_WINDOW_SIZE,
    },
  },
  hooks: [],
  include: {
    I: './steps_file.js',
  },
  output: './output',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
  },
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: true,
      uniqueScreenshotNames: true,
    },
    subtitles: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  tests: './tests/**/*.test.ts',
}
