Feature: Sign Up page

    Feature Register New User

    Background:
        Given A user is at the Home page
    Scenario: Successful registration of a new user
        When A user click on Create An Account button
        And A user enters correct new firstname, lastname, email, password and confirm password
        And A user clicks on the Create an Account btn
        Then A user lands on the dashboard