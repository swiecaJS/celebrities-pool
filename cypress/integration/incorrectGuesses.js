/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="Cypress" />
import faker from 'faker';

const SLIDER_STEP = 1;
const MIN_NUMBER_OF_CHARACTERS_PER_PLAYER = 1;

describe('Incorrect Guesses in every first turn', () => {
  let charactersPerPerson;
  let numberOfPlayers;

  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it('shows start screem', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get('[data-cy="start-game-btn"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/rules`);
  });

  it('ask users about rules', () => {
    cy.get('[data-cy="user-know-rules-btn"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/settings`);
  });

  it('allows to change settings', () => {
    let sliderValue;
    cy.get('[data-cy="number-of-players-slider"]')
      .then(($div) => {
        sliderValue = Number($div.text());
      })
      .trigger('mousedown')
      .trigger('mousemove', 'right')
      .trigger('mouseup')
      .should(($div) => {
        numberOfPlayers = Number($div.text());
        expect(numberOfPlayers).to.eq(sliderValue + SLIDER_STEP);
      });

    cy.get('[data-cy="character-per-person-slider"]')
      .then(($div) => {
        sliderValue = Number($div.text());
      })
      .trigger('mousedown')
      .trigger('mousemove', 'left')
      .trigger('mousemove', 'left')
      .trigger('mousemove', 'left')
      .trigger('mousemove', 'left')
      .trigger('mousemove', 'left')
      .trigger('mouseup')
      .should(($div) => {
        charactersPerPerson = Number($div.text());
        expect(charactersPerPerson).to.eq(MIN_NUMBER_OF_CHARACTERS_PER_PLAYER);
      });

    cy.get('[data-cy="settings-finished-btn"').click();
  });

  it('asks users to enter characters', () => {
    const totalCharactersNumber = charactersPerPerson * numberOfPlayers;
    cy.url().should('eq', `${Cypress.config().baseUrl}/characters`);

    cy.get('[data-cy="total-characters-in-game"]')
      .invoke('val')
      .then(value => expect(Number(value)).to.eq(totalCharactersNumber));

    let enteredCharacters = 0;

    cy.wrap(new Array(totalCharactersNumber)).each(() => {
      cy.get('[data-cy="characters-entered"]')
        .invoke('val')
        .then(value => expect(Number(value)).to.eq(enteredCharacters));

      cy.get('[data-cy="player-ready-btn"]').click();
      cy.get('[data-cy="enter-character"]').type(faker.name.findName());
      cy.get('[data-cy="submit-character-btn"]')
        .click()
        .then(() => {
          enteredCharacters += 1;
        });
    });

    cy.get('[data-cy="characters-entering-finished"]').click();
  });

  it('display info about first round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="start-round-btn"]').click();
  });

  it('allow Team B to guess all characters in first round', () => {
    const totalCharactersNumber = charactersPerPerson * numberOfPlayers;
    const correctBtn = 'button[data-cy="correct"]';
    const notCorrectBtn = 'button[data-cy="notCorrect"]';

    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="game-standings"]').should('be.visible');
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(totalCharactersNumber)).each(() => {
      cy.get(notCorrectBtn).click();
    });

    // TEAM B turn
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(totalCharactersNumber)).each(() => {
      cy.get(correctBtn).click();
    });
  });

  it('display info about second round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="start-round-btn"]').click();
  });

  it('allow team B to guess all characters in second round', () => {
    const totalCharactersNumber = charactersPerPerson * numberOfPlayers;
    const correctBtn = 'button[data-cy="correct"]';
    const notCorrectBtn = 'button[data-cy="notCorrect"]';

    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="game-standings"]').should('be.visible');
    cy.get('[data-cy="start-turn-btn"]').click();

    // TEAM A - turn
    cy.wrap(new Array(totalCharactersNumber)).each(() => {
      cy.get(notCorrectBtn).click();
    });

    // TEAM B turn
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(totalCharactersNumber)).each(() => {
      cy.get(correctBtn).click();
    });
  });

  it('display info about third round', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('be.visible');
    cy.get('[data-cy="game-standings"]').should('not.be.visible');
    cy.get('[data-cy="start-round-btn"]').click();
  });

  it('allow team B to guess all characters in thirf round', () => {
    const totalCharactersNumber = charactersPerPerson * numberOfPlayers;
    const correctBtn = 'button[data-cy="correct"]';
    const notCorrectBtn = 'button[data-cy="notCorrect"]';

    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
    cy.get('[data-cy="round-opening"]').should('not.be.visible');
    cy.get('[data-cy="game-standings"]').should('be.visible');
    cy.get('[data-cy="start-turn-btn"]').click();

    // TEAM A - turn
    cy.wrap(new Array(totalCharactersNumber)).each(() => {
      cy.get(notCorrectBtn).click();
    });

    // TEAM B turn
    cy.get('[data-cy="start-turn-btn"]').click();

    cy.wrap(new Array(totalCharactersNumber)).each(() => {
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
      .then(value => expect(value).to.eq('B'));
  });
});
