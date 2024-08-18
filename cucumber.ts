import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Page, Browser } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async openBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
