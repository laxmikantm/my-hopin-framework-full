/// <reference types="cypress-xpath" />

class resultsPage{
    getEmployeeName(){
      return cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Name")]/parent::*')
    }
    getEmployeeCount(){
      return cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Employees")]/parent::*')
    }
    getSize(){
      return cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Size")]/parent::*')
    }
    getContactInfo(){
      return cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Contact")]/parent::*')
    }
    backButton(){
      return cy.get('input[type=button][value="Back to the list"]')
    }
}
export default resultsPage