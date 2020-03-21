/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="Cypress" />

const NUMBER_OF_CHARACTERS = 5;
const correctBtn = 'button[data-cy="correct"]';
const notCorrectBtn = 'button[data-cy="notCorrect"]';


describe('Incorrect Guesses after first turn', () => {
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
    cy.fillUpSettings({});
  });

  it('asks users to enter characters', () => {
    cy.fillUpCharacters({ numberOfCharacters: NUMBER_OF_CHARACTERS });
  });

  it('display info about first round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="start-round-btn"]').click();
  });

  it('allow Team A to guess all characters in first round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="game-standings"]').should('be.visible');
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(NUMBER_OF_CHARACTERS)).each(() => {
      cy.get(correctBtn).click();
    });
  });

  it('display info about second round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="start-round-btn"]').click();
  });

  it('allow team B to guess incorrectly all characters in second round (team A wins round)', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="game-standings"]').should('be.visible');
    cy.get('[data-cy="start-turn-btn"]').click();

    // TEAM B - turn
    cy.wrap(new Array(NUMBER_OF_CHARACTERS)).each(() => {
      cy.get(notCorrectBtn).click();
    });

    // TEAM A turn
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(NUMBER_OF_CHARACTERS)).each(() => {
      cy.get(correctBtn).click();
    });
  });

  it('display info about third round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="start-round-btn"]').click();
  });

  it('allow team B to guess all characters incorrectly in third round (team A wins)', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="game-standings"]').should('be.visible');
    cy.get('[data-cy="start-turn-btn"]').click();

    // TEAM B - turn
    cy.wrap(new Array(NUMBER_OF_CHARACTERS)).each(() => {
      cy.get(notCorrectBtn).click();
    });

    // TEAM A turn
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(NUMBER_OF_CHARACTERS)).each(() => {
      cy.get(correctBtn).click();
    });
  });

  it('shows game over screen, team B wins', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/results`);
    cy.get('[data-cy="game-results"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="reset-game-btn"]').should('be.visible');
    cy.get('[data-cy="game-winner"]')
      .invoke('val')
      .then(value => expect(value).to.eq('A'));
  });
});
