import React from 'react';
import './collection-item.scss';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import Button from '../button/button.jsx';


const CollectionItem = ( { item } ) => {

    const dispatch = useDispatch();

    const { name, price, imageUrl } = item;

    const collectionItemStyle = {
        backgroundImage: "url('" + imageUrl + "')"
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
                onClick={ () => { dispatch( addItemToCart( item ) ) } }
                inverted>Add to Cart</Button>
        </div>
    )

}


export default CollectionItem;