import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

  import {registerNewUser} from "@pages/SignUpPage";
  import { faker } from '@faker-js/faker';
  var firstName = faker.person.firstName();
  var lastName =  faker.person.lastName();
  var email = faker.internet.email();
  var password = faker.internet.password();
  var confirmPassword = password;


    Given("A user is at the Home page", () => {
    cy.visit("/");
  });
  
    When ("A user click on Create An Account button", () => {
    registerNewUser.openRegisterPage();
    });

   When ("A user enters correct new firstname, lastname, email, password and confirm password", () =>{
    registerNewUser.fillNewUserDetails(firstName,lastName,email,password,confirmPassword);
    });

   When ("A user clicks on the Create an Account btn", () => {
    registerNewUser.clickCreateAccountAndVerify();
    });

    Then ("A user lands on the dashboard", () => {
    registerNewUser.verifyUserRegistration();
    });