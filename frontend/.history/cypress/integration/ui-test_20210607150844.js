// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import SearchPage from '../pageObjects/searchPage'

require('cypress-xpath')

describe("Basic Customer search", () =>{
  const searchPage = new SearchPage()
  Cypress.config('pageLoadTimeout', 100000)

  beforeEach(() => {
    cy.visit('http://localhost:3002')
      cy.fixture('example2').then(function (data) {
        this.data = data;
    })
  })




  it("Able to search", function()  {
    searchPage.searchUserField().type('Test user')
    searchPage.submitBtn().click()

    cy.get('tbody>tr>td').within(($form) => {
            cy.get('a[href="#"]').first().contains(this.data.name)
        })

     cy.fixture('example').then(testdata => {
       let i=1;
            testdata.forEach(data => {
           
              const name = data.name
              const id   = data.id
              const employees = data.employees
              const contactInfo = data.contactInfo
              const size = data.size
              cy.xpath(`//table/tbody/tr[${i++}]`)
                .within(() => {
                    cy.get('td a[href="#"]').contains(name)
                    cy.get('td').contains(employees)
                    cy.get('td').contains(size)
                  });
            })//end forEach
     })     

  })

  it("Check customer details", function(){
    searchPage.searchUserField().type('Test user')
    searchPage.submitBtn().click()

       cy.fixture('example').then(testdata => {
       let i=1;
            testdata.forEach(data => {    
              const name = data.name
              const id   = data.id
              const employees = data.employees
              const contactInfo = data.contactInfo
              const size = data.size
              cy.xpath(`//table/tbody/tr[${i++}]`)
                .within(() => {
                    cy.get('td a[href="#"]').click()          
                  });       
                    cy.get('body')
                      .contains('Customer Details')   
                    cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Name")]/parent::*')
                      .contains(name)
                    cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Employees")]/parent::*')
                      .contains(employees) 
                  cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Size")]/parent::*')
                      .contains(size)
                  cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Size")]/parent::*')
                      .contains(size)                                                
                    cy.wait(200)
                    cy.get('input[type=button][value="Back to the list"]')
                      .click()  
            })//end forEach
     })


  })

  
})

