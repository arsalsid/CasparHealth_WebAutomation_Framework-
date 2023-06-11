describe('Caspar Health Launching', function(){

    before(function(){
        cy.fixture('loginCred').then(function(data)
        {
            this.data=data

        })
    })

    it('Launching the browser Testcase', function(){
        cy.visit('/cypress.config.js')
        
        cy.get('[name=login]').type(this.data.casparId)
        cy.get('[name=password]').type(this.data.password)
        cy.get('button[data-cy=login-submit]').click()
       // cy.get('div[class=todo]').should('not.equal', 'Jane')
       // expect(toString).to.not.equal('Jane')
       // cy.get('[type=secondary]').click()
    })
})