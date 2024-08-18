import { Given, When, Then, AfterAll } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../cucumber';



Given(/^the user logs in to Yahoo Finance$/, async function (this: CustomWorld) {
  await this.openBrowser();
  await this.page.goto('/');
  await this.page.click('text=Sign In');
  await this.page.fill('input[name="username"]', 'your-username');
  await this.page.click('button[name="signin"]');
  await this.page.fill('input[name="password"]', 'your-password');
  await this.page.click('button[name="verifyPassword"]');
});

When(/^the user creates a new portfolio named "([^"]*)"$/, async function (this: CustomWorld, portfolioName: string) {
  await this.page.click('text=My Portfolio');
  await this.page.click('text=Create Portfolio');
  await this.page.fill('input[name="portfolio-name"]', portfolioName);
  await this.page.click('button[name="create"]');
});

When(/^the user adds the following stocks to the portfolio:$/, async function (this: CustomWorld, dataTable) {
  for (const { Stock, Action, Quantity, Date } of dataTable.hashes()) {
    await this.page.click('text=Add Symbol');
    await this.page.fill('input[name="symbol"]', Stock);
    await this.page.click('text=Add Transaction');
    await this.page.fill('input[name="quantity"]', Quantity);
    await this.page.fill('input[name="date"]', Date);
    if (Action === 'Buy') {
      await this.page.click('text=Buy');
    } else if (Action === 'Sell') {
      await this.page.click('text=Sell');
    }
    await this.page.click('button[name="add-transaction"]');
  }
});

Then(/^the user should see the updated portfolio$/, async function (this: CustomWorld) {
  await this.page.goto('/portfolio');
  const portfolioExists = await this.page.isVisible('text=My Portfolio');
  expect(portfolioExists).toBeTruthy();
});

Then(/^the user filters the news for "([^"]*)"$/,  async function (this: CustomWorld, stockName: string) {
  await this.page.click('text=News');
  await this.page.fill('input[name="filter"]', stockName);
  const filteredNews = await this.page.isVisible(`text=${stockName}`);
  expect(filteredNews).toBeTruthy();
});



AfterAll(async function (this: CustomWorld) {
  await this.closeBrowser();
});
