/// <reference types="cypress" />


it('google test', function(){

    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb', {timeout: 6000}).type('Automation Step by Step{enter}')
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.wait(4000)
    cy.contains('Wideo').click()
    
    
})

it.only('login test', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
})