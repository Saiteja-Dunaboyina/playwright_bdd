import { defineConfig } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import os from "node:os";
import path from 'path';

const testDir = defineBddConfig({
  features: './features/*.feature',
  steps: './steps/*.js',
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", { outputFile: "cucumber-report/report.html" }),
    ['html'],
    [
      "allure-playwright",
      {
        detail: true,
        resultsDir: "allure-results",
        suiteTitle: false,
        environmentInfo: {
          OS: os.platform(),
          Architecture: os.arch(),
          NodeVersion: process.version,
        },
      },
    ],
  ],
  use: {
    headless: false,
    screenshot: 'only-on-failure',  // Automatically captures screenshots on failure
  },
  fullyParallel: false,
  workers: 1,
  retries: 3,

  // Add hooks for attaching screenshots to Allure
  hooks: {
    onTestEnd: async ({ test, result }, workerInfo) => {
      if (result.status === 'failed') {
        const screenshotPath = path.join(workerInfo.project.outputDir, `${test.title.replace(/[/\\?%*:|"<>]/g, '-')}.png`);
        await workerInfo.page.screenshot({ path: screenshotPath });
        
        // Attach screenshot to Allure
        await workerInfo.attachments.push({
          name: 'screenshot',
          type: 'image/png',
          path: screenshotPath,
        });
      }
    }
  },
});
