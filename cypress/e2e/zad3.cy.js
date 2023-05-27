it('login test', function(){

    cy.visit('https://www.fillup.pl/faktury')
    cy.get('#cookie-accepted-all').click()
    cy.get('.buttonsHGroup > .cta',{timeout: 20000}).click()
    cy.get('.KsefStartupInfoDialog__footer > .efileui-Button').click()
    cy.get('.label').click()
    cy.get('[data-testid="SimpleMenuItem-appUserLogin-listItem"]').click()
    cy.get('#mail').type('alexander95@vp.pl')
    cy.get('#password-input').type('Test1234567*')
    cy.get('.cta').click()
    cy.url().should('eq', 'https://www.fillup.pl/faktury/#/moje-faktury') 
    cy.get('.KsefStartupInfoDialog__footer > .efileui-Button').click()


})