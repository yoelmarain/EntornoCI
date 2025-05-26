const { defineConfig } = require('cypress');

// Archivo de configuracion que dice a Cypress dónde están los tests

module.exports = defineConfig({
  e2e: {
    specPattern: 'test/**/*.cy.js'
  },
});