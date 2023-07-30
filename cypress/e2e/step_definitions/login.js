import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

import {loginPage} from "@pages/LoginPage";


Given("user is at the Home page of the website", () => {
  cy.visit("/");
});

When("A user click on Sign In button", () => {
  loginPage.clickCreateAccountButton();
  
});

Then("A user enters the username, the password, and clicks on the login button", () => {
  cy.fixture('loginUser').as('myUser');
      cy.get('@myUser').then(user =>{
          loginPage.fillLoginCredentials(user.username, user.password)
      })
  loginPage.clickSignInButton();
});
