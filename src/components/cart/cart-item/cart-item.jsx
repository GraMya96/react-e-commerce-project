/* Dependencies: */
import React from 'react';

/* SCSS/CSS: */
import './cart-item.scss';

/* Other Components: */

/* Images: */

/* Other .js Files: */


const CartItem = ( { imageUrl, price, name, quantity } ) => {
    return (
        <div className='cart-item'>
            <img src={ imageUrl } alt="item" />
            <div className="item-details">
                <span className="name">{ name }</span>
                <span className="price">{ quantity } x { price }€</span>
            </div>
        </div>
    )
}


export default CartItem;