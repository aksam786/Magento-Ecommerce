Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given user is at the Home page of the website
    Scenario: Login with correct username and password
        When A user click on Sign In button
        Then A user enters the username, the password, and clicks on the login button