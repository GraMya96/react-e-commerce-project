/* Dependencies: */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

/* SCSS/CSS: */
import './cart-dropdown.scss';

/* Other Components: */
import Button from '../../button/button.jsx';
import CartItem from '../cart-item/cart-item';

/* Actions */
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

/* Images: */

/* Other .js Files: */


const CartDropdown = () => {

    const history = useHistory();
    const cartItems = useSelector( state => state.cart.cartItems );
    const dispatch = useDispatch();

    const goToCheckoutPage = () => {
        history.push('/checkout');
        dispatch( toggleCartHidden() );
    }

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems && cartItems.length > 0
                            ? cartItems.map( cartItem => {
                                return <CartItem
                                    key = { cartItem.id }
                                    imageUrl = { cartItem.imageUrl }
                                    name = { cartItem.name }
                                    price = { cartItem.price }
                                    quantity = { cartItem.quantity } />
                            } )

                            : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button onClick = { goToCheckoutPage }>GO TO CHECKOUT</Button>
        </div>
    )
}


export default withRouter(CartDropdown);