describe('Calculadora de concatenación', () => {
  it('Concatena dos números correctamente', () => {
    cy.visit('https://calculadora-rned.onrender.com');
    cy.get('#number1').type('12');
    cy.get('#number2').type('34');
    cy.get('#concatButton').click();
    cy.get('#result').should('contain', 'Resultado: 1234');
  });
});