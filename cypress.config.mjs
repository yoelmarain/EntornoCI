// Archivo de configuración que dice a Cypress dónde están los tests

export default {
  e2e: {
    setupNodeEvents(on, config) {
      // Puedes agregar eventos de Node aquí si los necesitas
    },
    supportFile: false,
    specPattern: 'test/**/*.cy.{js,jsx,ts,tsx}'
  },
};