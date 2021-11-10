/* Dependencies: */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* SCSS/CSS: */
import './cart-icon.scss';

/* Other Components: */
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

/* Images: */
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

/* Other .js Files: */


const CartIcon = () => {

    const userSelector = useSelector( state => state.user.currentUser );
    const totalItemsSelector = useSelector( state => state.cart.cartItems );
    const dispatch = useDispatch();

    let totalQuantity = 0;

    if( totalItemsSelector && userSelector ) {
        totalQuantity = totalItemsSelector.reduce(( accumulatedQuantity, cartItem ) => {
            return accumulatedQuantity + cartItem.quantity;
        }, 0);
    }

    return (
        <div className='cart-icon' onClick={ () => { dispatch( toggleCartHidden() ) } }>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{ totalQuantity }</span>
        </div>
    )
}


export default CartIcon;