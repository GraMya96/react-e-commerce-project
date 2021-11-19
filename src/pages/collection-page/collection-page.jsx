/* Dependencies: */
import React from 'react';

/* SCSS/CSS: */
import './collection-page.scss';

/* Other Components: */
import CollectionItem from '../../components/collection-item/collection-item';

/* Hooks: */
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Actions: */

/* Images: */

/* Other .js Files: */


const CollectionPage = () => {

    const match = useRouteMatch();
    const categoryString = match.params.category;

    const allItemsSelector = useSelector( state => state.shop.collections );
    let items;
    items = allItemsSelector && Array.isArray( allItemsSelector )
        ? allItemsSelector
            .filter(
                singleCategory => {
                    return singleCategory.routeName === categoryString;
                }
            )[0].items
            .map(
                singleItem => {
                    return <CollectionItem
                        key = { singleItem.id }
                        item = { singleItem }
                    />
                }
            )
        : null;

    return (
        <div className='collection-page'>
            <h2 className='title'>{ categoryString.charAt(0).toUpperCase() + categoryString.slice(1) }</h2>
            <div className="items">
                { items }
            </div>
        </div>
    )
}


export default CollectionPage;