// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import faker from 'faker';


Cypress.Commands.add('fillUpSettings', ({ numberOfCharacters }) => {
  const SLIDER_STEP = 1;
  const MIN_NUMBER_OF_CHARACTERS_PER_PLAYER = 1;
  const MIN_TIME_PER_ROUND_IN_SECONDS = 10;

  let charactersPerPerson;
  let numberOfPlayers;
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

  cy.get('[data-cy="seconds-for-round-slider"]')
    .then(($div) => {
      sliderValue = Number($div.text());
    })
    .trigger('mousedown')
    .trigger('mousemove', 'left')
    .trigger('mousemove', 'left')
    .trigger('mousemove', 'left')
    .trigger('mousemove', 'left')
    .trigger('mouseup')
    .should(($div) => {
      const currentValue = Number($div.text());
      expect(currentValue).to.eq(MIN_TIME_PER_ROUND_IN_SECONDS);
    });

  cy.get('[data-cy="settings-finished-btn"').click();
});

Cypress.Commands.add('fillUpCharacters', ({ numberOfCharacters }) => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/characters`);

  cy.get('[data-cy="total-characters-in-game"]')
    .invoke('val')
    .then(value => expect(Number(value)).to.eq(numberOfCharacters));

  let enteredCharacters = 0;

  cy.wrap(new Array(numberOfCharacters)).each(() => {
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
