/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="Cypress" />

describe('Time for turn ends', () => {
  const NUMBER_OF_CHARACTERS_TO_ENTER = 5;

  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it('shows start screen', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get('[data-cy="start-game-btn"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/rules`);
  });

  it('ask users about rules', () => {
    cy.get('[data-cy="user-know-rules-btn"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/settings`);
  });

  it('allows to change settings', () => {
    cy.fillUpSettings({ desiredCharactersNumber: NUMBER_OF_CHARACTERS_TO_ENTER });
  });

  it('asks users to enter characters', () => {
    cy.fillUpCharacters({ numberOfCharacters: NUMBER_OF_CHARACTERS_TO_ENTER });
  });

  it('display info about first round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
  });

  it('allows to go back to the main menu', () => {
    cy.window().then((win) => {
      cy.get('[data-cy="go-home-btn"]').click();
      cy.stub(win, 'confirm').returns(true);

      cy.url().should('eq', `${Cypress.config().baseUrl}/`);

      cy.get('[data-cy="start-game-btn"]').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/rules`);
    });
  });

  it('ask users about rules', () => {
    cy.get('[data-cy="user-know-rules-btn"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/settings`);
  });

  it('allows to change settings', () => {
    cy.fillUpSettings({ desiredCharactersNumber: NUMBER_OF_CHARACTERS_TO_ENTER });
  });

  it('should ask user to fill up characters again', () => {
    cy.get('[data-cy="characters-entered"]')
      .invoke('val')
      .then(value => expect(Number(value)).to.eq(0));
  });
});
