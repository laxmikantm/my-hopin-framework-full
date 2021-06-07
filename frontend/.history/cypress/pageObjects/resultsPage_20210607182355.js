class resultsPage{
    searchUserField(){
      return cy.get('#name')
    }
    submitBtn(){
        return cy.get('input[type=button][value=Submit]')
    }
}
export default resultsPage