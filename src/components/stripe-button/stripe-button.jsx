/* Dependencies: */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/* SCSS/CSS: */
import './stripe-button.scss';

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const StripeButton = ({ price }) => {

    const priceForStripe = price * 100; //in cents
    const stripePublishableKey = 'pk_test_51Jtvt1KlPNvWAxjFerhtRUOG6OjkHR3PE1XEj0SFHOtPfbbpIkgKqUqLWMomOLFrKYsPHfkUuHlsxPAYGWvEIXQa008AI9ggAq';

    const tokenHandler = token => {
        // We don't need to handle real payments,
        // so we're just logging out the token value
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'React E-Commerce Test'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = { `Your total is ${ price }€` }
            amount = { priceForStripe }
            panelLabel = 'Pay Now'
            token = { tokenHandler }
            stripeKey = { stripePublishableKey } />
    )
}


export default StripeButton;