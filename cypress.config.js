const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integeration/*.js',
    baseurl: 'https://app.caspar-health.com/en/user/sign_in',
    screenshotOnRunFailure: 'cypress/screenshots/*.js'
  },
});
