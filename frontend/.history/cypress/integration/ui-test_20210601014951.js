// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Customer validation", () =>{

  before(() => {
		cy.visit('http://localhost:3000/#');
		cy.acceptCookies();
	});

  it("Homepage contains data", () => {

  })
})