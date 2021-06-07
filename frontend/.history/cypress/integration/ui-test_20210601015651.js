// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Customer validation", () =>{

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it("Homepage contains data", () => {
    cy.get('#name').type('aa')
    cy.get('input[type=button][value=Submit]').click()
  })
})