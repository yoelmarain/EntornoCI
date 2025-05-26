// Archivo de configuración que dice a Cypress dónde están los tests

export default {
  e2e: {
    supportFile: false,
    specPattern: 'test/**/*.cy.{js,jsx,ts,tsx}'
  },
};