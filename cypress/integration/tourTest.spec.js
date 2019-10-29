import SignInPage from './pages/signInPage';


describe('Sample POM Flow', function() {

    const signInPage = new SignInPage();

    beforeEach(() => {
        signInPage.visit();
      })

      it('complete login', () => {
        signInPage.signIn();
      })

      it('navigate in JMC HomePage', () => {
          const homePage = signInPage.signIn();

          homePage.clickOnTab("Tasks");
          homePage.clickOnTab("Time Tracking");
      })


})