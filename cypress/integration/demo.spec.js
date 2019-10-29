
// context('Demo', () => {
//     beforeEach(() => {
//       cy.visit('http://the-internet.herokuapp.com/')
//     })


//     it('login scenario', () => {
//         cy.contains('Form Authentication').click();

//         cy.get('#username').type('sampleUsername@mail.com');

//         cy.get('#password').type('password');

//         cy.contains(' Login').click();

//       })


//       it('dropdown scenario', () => {
//         cy.contains('Dropdown').click();

//         cy.get('#dropdown').select('Option 2');
//       })

//       it('banner scenario', () => {
//         cy.contains('Entry Ad').click();

//         cy.contains('Close').click();
//       })

//       it('Frames scenario', () => {
//         cy.contains('Frames').click();

//         cy.contains('iFrame').click();

//         cy.contains('File').click();

//         cy.contains('New document').click();

//         cy.get('#mceu_17-open > span').click();
//       })

// })

describe('Sample One', function() {

    beforeEach(() => {
              cy.visit('http://the-internet.herokuapp.com/')
            })

    it('banner scenario', () => {
                cy.contains('Entry Ad').click();
        
                cy.contains('Close').click();
        })

})