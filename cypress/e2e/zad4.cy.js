it('adding invoice', function(){

    cy.visit('https://www.fillup.pl/faktury')                               //logowanie
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



    cy.get('[data-testid="ButtonMenu-invoiceCreate-Button"] > .efileui-Button').click()         //wystawienie faktury
    cy.get(':nth-child(1) > [data-testid="SimpleMenuItem-invoiceCreate-listItem"]').click()
    cy.get(':nth-child(2) > .header > .headerLine').click()
    
    
    cy.get('.DaneNabywcy.groupCollapsed > .header > .headerLine').click()
    cy.get(':nth-child(3) > .groupContent > .fields-FieldGroupSimple > .personCompanyForm > :nth-child(1) > .DaneNabywcySimpleNipPesel > .fields-BaseField > .fieldContent > [data-testid="textInputField_nip"]').clear()
    cy.get(':nth-child(3) > .groupContent > .fields-FieldGroupSimple > .fields-BaseForm > :nth-child(1) > .DaneNabywcySimpleNipPesel > .fields-BaseField > .fieldContent > [data-testid="textInputField_nip"]').type('1060005214')

    cy.get('[data-testid="textInputField_name"]').type('remont')
    cy.get('[data-testid="currencyField_unitCost"]',{timeout: 60000000}).type('500')
    cy.get('[data-testid="currencyField_payedAmount"]').click()
    cy.get('.InvoiceFooterButtonGroup > .cta').click()
    cy.get('.right > .efileui-Button').click()
    cy.wait(400)  
    cy.get(':nth-child(2) > .notifyContent',{timeout:6000})                     //sprawdzenie czy dodana
        .should('be.visible')



})