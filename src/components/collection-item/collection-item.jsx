import React from 'react';
import './collection-item.scss';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import Button from '../button/button.jsx';


const CollectionItem = ( { item } ) => {

    const [ itemCannotBeAddedToCart, setItemCannotBeAddedToCart ] = useState(false);

    const userSelector = useSelector( state => state.user.currentUser );
    const dispatch = useDispatch();

    const { name, price, imageUrl } = item;

    const collectionItemStyle = {
        backgroundImage: "url('" + imageUrl + "')"
    }

    const handleAddToCart = () => {
        if( userSelector ) {
            dispatch( addItemToCart( item ) );
        }
        else {
            setItemCannotBeAddedToCart( true );
        }
    }

    return (
        <div className="collection-item">
            <div className="image"
                style = { collectionItemStyle }>
            </div>

            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price + '€'}</span>
            </div>
            <Button
                onClick={ handleAddToCart }
                inverted>Add to Cart</Button>

            { itemCannotBeAddedToCart && <span className="adding-cart-error">Log In to Add this Item to your Cart!</span> }
        </div>
    )

}


export default CollectionItem;