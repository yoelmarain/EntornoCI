describe('Calculadora de concatenación', () => {
  it('Concatena dos números correctamente', () => {
    cy.visit('https://calculadora-rned.onrender.com');
    cy.get('#number1').type('12');
    cy.get('#number2').type('34');
    cy.get('#concatButton').click();
    cy.get('#result').should('contain', 'Resultado: 12345');
  });

  it('Muestra mensaje de error si algún input está vacío', () => {
    cy.visit('https://calculadora-rned.onrender.com');
    cy.get('#number1').clear();
    cy.get('#number2').clear();
    cy.get('#concatButton').click();
    cy.get('#result').should('contain', 'Se deben ingresar dos números válidos');
  });
});