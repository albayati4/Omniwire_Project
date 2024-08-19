import { setWorldConstructor, setDefaultTimeout, AfterAll, BeforeAll } from '@cucumber/cucumber';
import { CustomWorld } from './world'; 

// Set default timeout for the Cucumber steps
setDefaultTimeout(60000);

// BeforeAll hook to run before all tests
BeforeAll(async function (this: CustomWorld) {
  await this.openBrowser();
});

// AfterAll hook to run after all tests
AfterAll(async function (this: CustomWorld) {
  await this.closeBrowser();
});

setWorldConstructor(CustomWorld);
