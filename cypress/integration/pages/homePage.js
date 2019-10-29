class HomePage {

    clickOnTab(tabName) {
        cy.contains(tabName).click();
    }
}

export default HomePage;