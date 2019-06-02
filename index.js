// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('manhattan', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Google', async function() {
        // Load the page
        await driver.get('https://dslusser.com');
        // Find the search box by id
        await driver.findElement(By.id('manh-control')).click();
        // Wait for the results box by id
    });
    // close the browser after running tests
    // after(() => driver && driver.quit());
})