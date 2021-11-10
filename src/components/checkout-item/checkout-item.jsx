/* Dependencies: */
import React from 'react';

/* SCSS/CSS: */
import './checkout-item.scss';

/* Other Components: */

/* Hooks: */
import { useDispatch } from 'react-redux';

/* Actions */
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions';

/* Images: */

/* Other .js Files: */


const CheckoutItem = ( { item } ) => {

    const dispatch = useDispatch();

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={ item.imageUrl } alt="Item" />
            </div>
            <span className="name">{ item.name }</span>
            <span className="quantity">
                <div onClick={ () => dispatch( removeItemFromCart( item ) ) } className="arrow">&#10094;</div>
                    <span className="value">{ item.quantity }</span>
                <div onClick={ () => dispatch( addItemToCart( item ) ) } className="arrow">&#10095;</div>
            </span>
            <span className="price">{ item.price }€</span>
            <div onClick={ () => dispatch( clearItemFromCart( item ) ) } className="remove-button">&#10005;</div>
        </div>
    )
}


export default CheckoutItem;