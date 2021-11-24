import './collection-item.scss';

import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import Button from '../button/button.jsx';
import UserMessage from '../../UI/user-message/user-message';

const CollectionItem = ( { item } ) => {

    const [ showItemMessage, setShowItemMessage ] = useState(false);
    const [ itemMessage, setItemMessage ] = useState({
        type: '',
        text: ''
    });

    const userSelector = useSelector( state => state.user.currentUser );
    const dispatch = useDispatch();

    const { name, price, imageUrl } = item;

    const collectionItemStyle = {
        backgroundImage: "url('" + imageUrl + "')"
    }

    const handleAddToCart = () => {

        let messageType = 'error';
        let messageText = 'Sign-In to add this Item to your Cart!';

        if( userSelector ) {
            messageType = 'confirm';
            messageText = 'Item added successfully to your Cart!'
            dispatch( addItemToCart( item ) );
        }

        setItemMessage({
            ...itemMessage,
            type: messageType,
            text: messageText
        });

        setShowItemMessage( true );
    }

    useEffect(() => {
        setTimeout( () => setShowItemMessage(false), 800 );
    }, [showItemMessage])

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

            { showItemMessage &&
                <UserMessage
                    text = { itemMessage.text }
                    type = { itemMessage.type }
                />
            }
        </div>
    )

}


export default CollectionItem;