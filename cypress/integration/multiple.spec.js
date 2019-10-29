context('Demo', () => {
    beforeEach(() => {
      cy.visit('http://the-internet.herokuapp.com/')
    })


    it('login scenario', () => {
        cy.contains('Form Authentication').click();

        cy.get('#username').type('sampleUsername@mail.com');

        cy.get('#password').type('password');

        cy.contains(' Login').click();

      })

})


context('Demo Two', () => {
    beforeEach(() => {
      cy.visit('http://google.com/')
    })


    it('search scenario', () => {

        cy.get('input[name="q"]').type('searchText');

        cy.get('#tsf').submit();

      })

})
