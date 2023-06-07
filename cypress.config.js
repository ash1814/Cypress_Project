const { defineConfig } = require("cypress");

module.exports = {
  video: false,
  
  testingType: {
    e2e: {
      projectId: "rzv32q",
      screenshotsFolder: "cypress/screenshots",
      videosFolder: "cypress/videos",
      video: false,
      specPattern: "**/*/*.cy.js",
      supportFile: "cypress/support",
      videoCompression: 15,
      specPattern: 'cypress//**/*.cy.{js,jsx,ts,tsx}',
      supportFile: "cypress/support/index.js",
      testFiles: '**/*.cy.js',
      defaultCommandTimeout: 5000,
      responseTimeout: 10000,
      
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
};