// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Customer validation", () =>{


  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.acceptCookies()
  });

  it("Homepage contains data", () => {
    cy.visit('http://localhost:3000/#')
  })
})