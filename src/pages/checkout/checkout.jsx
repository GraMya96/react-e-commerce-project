/* Dependencies: */
import React from 'react';
import { useSelector } from 'react-redux';

/* SCSS/CSS: */
import './checkout.scss';

/* Other Components: */
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeButton from '../../components/stripe-button/stripe-button';

/* Images: */

/* Other .js Files: */


const CheckoutPage = () => {

    const cartItemsSelector = useSelector( state => state.cart.cartItems );

    const totalPrice = cartItemsSelector.reduce( ( accumulatedQuantity, cartItem ) => {
        return accumulatedQuantity + cartItem.quantity * cartItem.price;
    }, 0);

    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItemsSelector.map( cartItem => {
                    return <CheckoutItem
                                key = { cartItem.id }
                                item = { cartItem }
                            />;
                } )
            }

            <div className="total">
                <span>{ totalPrice }€</span>
            </div>

            <div className="test-warning">
                *Please use the following test credit card for payment:
                <br />
                4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
            </div>
            <StripeButton
                price = { totalPrice } />

        </div>
    )
}


export default CheckoutPage;