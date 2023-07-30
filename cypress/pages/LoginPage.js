class LoginPage{


  clickCreateAccountButton(){
      try {
          cy.get('a').contains('Sign In').click({ multiple: true, force: true });
      } catch (error) {
          throw new Error("unable to Sign In", error)
      }
  }

  fillLoginCredentials(username, password){
      try {
        cy.get('#email').type(username);
        cy.get('#pass').type(password);
      } catch (error) {
          throw new Error("unable to Sign In", error)
      }
  }

  clickSignInButton(){
      try {
          cy.get('button').should('have.class', 'action login primary').click({ multiple: true, force: true });
      } catch (error) {
          throw new Error("unable to Sign In", error)
      }
  }
}


export const loginPage = new LoginPage();
