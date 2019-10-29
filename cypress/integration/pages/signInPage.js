import HomePage from './homePage';

class SignInPage {

    visit() {
        cy.visit('https://jm-central-staging.pro.com');
    }

    signIn() {
        cy.get('#emailField').type('vinodb@pro.com');
        cy.get('#passwordField').type('Vinod1234');

        cy.get('input[value="Submit"]').click();

        const homePage = new HomePage();

        return homePage;
    }

}

export default SignInPage;