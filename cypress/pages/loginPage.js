class LoginPage{
    
    visit() {
        cy.visit("/cypress.config.js")
        
    }

    enterUsername(text) {
        return cy.get('[name=login]').type(this.data.casparId)
    }

    enterPassword(text) {
        return cy.get('[name=password]').type(this.data.password)
    }

    clickOnLoginButton() {
      return  cy.get('button[data-cy=login-submit]').click()
    }
}