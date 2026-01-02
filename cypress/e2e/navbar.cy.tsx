/// <reference types="cypress" />

describe('Navbar', () => {
  it('should be centered', () => {
    cy.visit('http://localhost:3000');
    cy.get('nav').should('have.css', 'left', '50%');
    cy.get('nav').should('have.css', 'transform', 'translateX(-50%)');
  });
});
