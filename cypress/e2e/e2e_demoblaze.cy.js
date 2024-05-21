/// <reference types='cypress' />
let user;

describe('', () => {
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('The user should be able to register', () => {
    cy.get('#signin2').click();

    cy.get('#sign-username').type(user.username);
    cy.get('#sign-password').type(user.password);
    cy.contains('.btn', 'Sign up').click();

    cy.get('#login2').click();

    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.contains('.btn', 'Log in').click();

    cy.contains('.hrefch', 'Samsung galaxy s6').click();

    cy.contains('.btn', 'Add to cart').click();
    cy.get('#cartur').click();
  });
});