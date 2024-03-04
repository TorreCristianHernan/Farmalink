/// <reference  types="cypress" />
describe('Test Login', () => {
    it('Preparamos el entorno',async () => {

const url = await cy.getLoginUrl()     
cy.log(url) 
cy.visit(url)
cy.get('.css-1nst0og > .MuiButtonBase-root').click()
cy.get('#marca').type('ACTRON 600 RAPIDA {enter}')
cy.contains('ACTRON 600 RAPIDA ACCION').click()
cy.wait(2000)
cy.get('#presentaciones').type('caps.gelat.blanda{enter}')
cy.contains('caps.gelat.blanda x 20').click()
cy.wait(2000)
cy.get('#posologia').type('ser tomado 2 veces al dia durante 7 dias{enter}')
cy.contains('No sustituir').click()
cy.get('.makeStyles-container-25 > .makeStyles-container-21 > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #diagnostico').type('ninguno')
cy.wait (10000)
cy.wait(5000)
cy.screenshot()
cy.get('#diagnostico').type('reservado')
cy.contains('CONFIRMAR RECETA').click()
cy.wait(5000)
cy.screenshot()

})
})