// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath')

describe("Basic Customer search", () =>{

  beforeEach(() => {
    cy.visit('http://localhost:3002')
      cy.fixture('example2').then(function (data) {
      this.data = data;
    })
  })


  it("Able to search", function()  {
    cy.get('#name').type('aa')
    cy.get('input[type=button][value=Submit]').click()
    // cy.get('tbody>tr>td>a:first-child').should('equals', this.user.name)
    // cy.get('tbody>tr>td>a:first-child').should('equals', cy.fixture('example').its('customers').its(0).its('name').toString())
    // cy.get('tbody>tr>td>a:first-child').should('equals', cy.fixture('example').its('customers').its(0).its('name').toString())
    // cy.get('tbody>tr>td>a:first-child').should('equals', cy.fixture('example2').its('name').toString())
    console.log(cy.fixture('example2').its('name').toString())
    // cy.get('tbody>tr>td> a[href="#"]:first-child').should('equals', cy.fixture('example2').its('name').toString())
    cy.get('tbody>tr>td> a[href="#"]').first().contains( this.data.name)

    cy.get('tbody>tr>td').within(($form) => {
            cy.get('a[href="#"]').first().contains(this.data.name)
        })

    var myArray = {}
     cy.fixture('example').then(testdata => {
       let i=1;
            testdata.forEach(data => {
           
              const name = data.name
              const id   = data.id
              const employees = data.employees
              const contactInfo = data.contactInfo
              const size = data.size

              cy.get(`tbody>tr>td`)
              cy.xpath(`//table/tbody`)
                .within(() => {
                    cy.xpath(`.//tr[${i++}]`)
                      .should('have.text', name)
                      .next()
                      .should('have.text', employees)
                      .next()
                      .should('have.text', size)
                  });

                // .first()
                // .should('have.text', name)
                // .next()
                // .should('have.text', employees)
                // .next()
                // .should('have.text', size)

              // myArray.push(JSON.stringify(name, id, employees, contactInfo, size))
              // myArray.push(name, id, employees, contactInfo, size) 
            })//end forEach
     })     

    //  console.log(`DEBUG: myarray-> ${myArray}`)
    //  cy.get('tbody>tr>td> a[href="#"]')

  })



  
})

describe.skip('Automation Test Suite - Fixtures', function () {
 
  // //Use the cy.fixture() method to pull data from fixture file
  // before(function () {
  //   cy.fixture('example').then(function (data) {
  //     this.data = data;
  //   })
  // })

    beforeEach(function () {
        cy.fixture('example').as('data')
    })
 
  it('Cypress Test Case - Understanding Fixtures', function () {
 
    //Provide the data read from the fixture
    cy.visit('https://shop.demoqa.com/my-account/');
    cy.get('#reg_username').type(this.data.Username);
    cy.get('#reg_email').type(this.data.Email);
    cy.get('#reg_password').type(this.data.Password)
 
    //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
    cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
    cy.get('.woocommerce-Button').should('be.disabled');
 
    // Clicking on to register on the Website by entering new password 
    cy.get('#reg_password').type(this.data.NewPassword);
    cy.get('.woocommerce-Button').click();
 
    //Checking whether the Registration is successful and whether UserName is populated under login section
    cy.get('#username').should('have.value', this.data.Username);
  })
})