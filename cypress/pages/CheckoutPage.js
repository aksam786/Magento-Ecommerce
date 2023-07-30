class CheckoutPage{



    selectProduct(){
        try {
            cy.get('ol').find('>li>div>a').eq(1).scrollIntoView().click({multiple: true, force: true});
            //await cy.get('span').should('have.text', 'In stock')
        } catch (error) {
            throw new Error("unable to select product", error)
        }
    }

    selectSize(){
        try {
            cy.get('[option-label="M"]').click({force: true});
        } catch (error) {
            throw new Error("unable select product size", error)
        }
    }

     selectColor(){
        try {
            cy.get('[option-label="White"]').click({force: true});
        } catch (error) {
            throw new Error("unable select product color", error)
        }
    }

    clickAddToCart(){
        try {
             cy.get('#product-addtocart-button').click();
             cy.wait(500)
        } catch (error) {
            throw new Error("unable click Add to Cart button", error)
        }
    }

    clickCart(){
        try {
            cy.wait(5000)
            cy.get('a[class="action showcart"]').should('be.visible');
            cy.get('a[class="action showcart"]').click({force: true});
        } catch (error) {
            throw new Error("unable click Cart button", error)
        }
    }

    clickProceedToCheckout(){
        try {
            cy.get('#top-cart-btn-checkout').should('be.visible');
            cy.get('#top-cart-btn-checkout').click({force: true});
        } catch (error) {
            throw new Error("unable click proceed to checkout button", error)
        }
    }

    fillShippingDetails(email,firstName, lastName, Company, streetAddress, city, zipCode, phoneNumber){
        try {
            cy.wait(20000)
            cy.get('#customer-email').type(email);
            cy.get('[name="firstname"]').type(firstName);
            cy.get('[name="lastname"]').type(lastName);
            cy.get('[name="company"]').type(Company);
            cy.get('[name="street[0]"]').type(streetAddress);
            cy.get('[name="city"]').type(city);
            cy.get('.select').eq(0).select('1')
            cy.get('[name="postcode"]').type(zipCode);
            cy.get('[name="telephone"]').type(phoneNumber);
        } catch (error) {
            throw new Error("unable to fill shipping details", error)
        }
    }

    selectShippingMethod(){
        try {
            cy.get('[type="radio"]').eq(0).check();
        } catch (error) {
            throw new Error("unable to select shipping details", error)
        }
    }
    
    clickNext(){
        try {
            cy.get("[class='button action continue primary']").click()
        } catch (error) {
            throw new Error("unable to click Next btn", error) 
        }
    }

    clickPlaceOrder(){
        try {
            cy.wait(5000)
            cy.get('[title="Place Order"]').click()
        } catch (error) {
            throw new Error("unable to click place order button", error)
        }
    }

    verifyOrderHasBeenPlaced(){
        try {
            cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Thank you for your purchase!')
        } catch (error) {
            throw new Error("unable to verify that order is placed", error)
        }
    }

}

export const checkoutPage = new CheckoutPage();