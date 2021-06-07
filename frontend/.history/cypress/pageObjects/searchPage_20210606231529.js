class searchPage{
    submit(){
        return cy.get('input[type=button][value=Submit]')
    }
}
export default searchPage