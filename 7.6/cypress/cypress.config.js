const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1536,
    viewportHeight: 960,
    baseUrl: "http://localhost:3000/",
    retries: 0
      // implement node event listeners here
    },
  },
);
