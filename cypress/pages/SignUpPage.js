class RegisterNewUser{

    openRegisterPage(){
        try {
            cy.get('a').contains('Create an Account').click();
        } catch (error) {
            throw new Error("unable to open Create An Account link", error)
        }
        
    }

    fillNewUserDetails(firstName, lastName, email, password, confirmPassword){
        try {
            cy.get('#firstname').type(firstName);
            cy.get('#lastname').type(lastName);
            cy.get('#email_address').type(email);
            cy.get('#password').type(password);
            cy.get('#password-confirmation').type(confirmPassword)
        } catch (error) {
            throw new Error("unable to fill new user details", error)
        }
    }

    clickCreateAccountAndVerify(){
        try {
            cy.get('button').should('have.class', 'action submit primary').click({multiple: true, force: true})
            cy.get('span').should('include.text', 'Welcome') // assertion
        } catch (error) {
            throw new Error("unable to fill new user details", error)
        }
    }

    verifyUserRegistration(){
        try {
            cy.get('span').should('include.text', 'Welcome') // assertion
        } catch (error) {
            throw new Error("unable to verify new user", error)
        }
    }

}

export const registerNewUser = new RegisterNewUser();