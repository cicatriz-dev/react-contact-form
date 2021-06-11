// teste.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('First app test', () => {
  it('Visits web site', () => {
    cy.visit('localhost:3001');

    cy.get('nav > div > a:nth-child(2)')
      .should('have.attr', 'href')
      .and('include', 'contato')
      .then((href) => {
        cy.visit(`localhost:3001${href}`);
      });
  });
});
