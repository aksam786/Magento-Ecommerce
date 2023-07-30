import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import {checkoutPage} from "@pages/CheckoutPage";
  import { faker } from '@faker-js/faker';
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  var firstName = faker.person.firstName();
  var lastName =  faker.person.lastName();
  var email = faker.internet.email();
  var company = faker.company.bsBuzz();
  var streetAddress = "379 Albama street, NYC";
  var city = "Auburn";
  var zipCode = "36801";
  var phoneNumber = faker.phone.number('+1 342 ### ####')

  Given ("user visits the home page of the website", () =>{
    cy.visit('/')
    cy.clearCookies();
  });

  When ("A user select a product and verify if the product is in stock", () =>{
    checkoutPage.selectProduct();
  });
  
  When ("select the size of the product", () => {
    checkoutPage.selectSize();
  });

  When ("select the color of the product", () => {
    checkoutPage.selectColor();
  });

  When ("clicks on the Add to Cart button", () => {
    checkoutPage.clickAddToCart();
  });

  When ("clicks on the shopping cart button", () => {
     checkoutPage.clickCart();
  });

  When ("clicks on proceed to checkout button", () => {
    checkoutPage.clickProceedToCheckout();
  });

  When ("user fills the shipping details", () =>{
    checkoutPage.fillShippingDetails(email, firstName, lastName, company, streetAddress, city, zipCode, phoneNumber)
  })

  When("user select the shipping method", () =>{
    checkoutPage.selectShippingMethod()
    checkoutPage.clickNext();
  })

  When ("user clicks on the Place order button", () =>{
    checkoutPage.clickPlaceOrder();
  })

  Then ("user sees ths success message", () =>{
    checkoutPage.verifyOrderHasBeenPlaced()
  })

