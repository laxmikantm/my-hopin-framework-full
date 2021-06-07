/// <reference types="cypress-xpath" />

class resultsPage{
    getEmployeeName(){
      return cy.xpath('//p[contains(text(),"Hi")]/following-sibling::div/p/b[contains(text(),"Name")]/parent::*')
    }
    submitBtn(){
        return cy.get('input[type=button][value=Submit]')
    }
}
export default resultsPage