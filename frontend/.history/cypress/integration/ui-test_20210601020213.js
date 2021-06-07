// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Customer validation", () =>{

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    })
  })

  it("Homepage contains data", () => {
    cy.get('#name').type('aa')
    cy.get('input[type=button][value=Submit]').click()

    cy.get('tbody>tr>td>a:first-child').should('have.attr')
  })
})