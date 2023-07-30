Feature: Checkout Journey of the user

    Feature Checkout journey

    Background:
        Given user visits the home page of the website
    Scenario: Successful checkout journey
        When A user select a product and verify if the product is in stock
        And select the size of the product
        And select the color of the product
        And clicks on the Add to Cart button
        And clicks on the shopping cart button
        And clicks on proceed to checkout button
        And user fills the shipping details
        And user select the shipping method
        And user clicks on the Place order button
        Then user sees ths success message