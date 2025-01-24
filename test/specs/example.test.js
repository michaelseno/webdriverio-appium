const assert = require('assert');

describe('Sample Test', () => {
    it('should open the app and validate the title', async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });
});
