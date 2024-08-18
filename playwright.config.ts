import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 2,
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    baseURL: 'https://finance.yahoo.com',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
