/// <reference types="Cypress" />
import faker from 'faker'

const SLIDER_STEP = 1;

describe("Game happy path", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it("shows start screem", function() {
    cy.visit(Cypress.config().baseUrl);
    cy.get('[data-cy="start-game-btn"]').click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/rules`);
  });

  it("ask users about rules", () => {
    cy.get('[data-cy="user-know-rules-btn"]').click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/settings`);
  });

  it("allows to change settings", () => {
    let sliderValue

    // TO DO - create command
    cy.get('[data-cy="number-of-players-slider"]')
      .then(($div) => {
        sliderValue = Number($div.text())
        console.log('sliderValue', sliderValue)
      })
      .trigger("mousedown")
      .trigger("mousemove", 'right')
      .trigger("mouseup")
      .should(($div) => {
        const currentValue = Number($div.text())
        expect(currentValue).to.eq(sliderValue + SLIDER_STEP)
      })


    cy.get('[data-cy="character-per-person-slider"]')
      .then(($div) => {
        sliderValue = Number($div.text())
        console.log('sliderValue', sliderValue)
      })
      .trigger("mousedown")
      .trigger("mousemove", 'left')
      .trigger("mouseup")
      .should(($div) => {
        const currentValue = Number($div.text())
        expect(currentValue).to.eq(sliderValue - SLIDER_STEP)
      })

    // TO DO - FIX
    /*
    cy.get('[data-cy="seconds-for-round-slider"]')
      .then(($div) => {
        sliderValue = Number($div.text())
        console.log('sliderValue', sliderValue)
      })
      .trigger("mousedown")
      .trigger("mousemove", 'right')
      .trigger("mouseup")
      .should(($div) => {
        const currentValue = Number($div.text())
        expect(currentValue).to.eq(sliderValue + TIME_SLIDER_STEP)
      })
      */

      cy.get('[data-cy="settings-finished-btn"').click()
  });

  it("asks users to enter characters", () => {

    cy.url().should("eq", `${Cypress.config().baseUrl}/characters`);
    cy.get('[data-cy="player-ready-btn"]').click();
    cy.get('[data-cy="enter-character"]').type(faker.name.findName());
    cy.get('[data-cy="submit-character-btn"]').click();

  })

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
});
