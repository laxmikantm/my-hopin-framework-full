class searchPage{
    searchUserField(){
      return cy.get('#name')
    }
    submitBtn(){
        return cy.get('input[type=button][value=Submit]')
    }
}
export default searchPage