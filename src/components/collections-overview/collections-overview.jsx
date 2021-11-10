/* Dependencies: */
import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview';

/* SCSS/CSS: */
import './collections-overview.scss';

/* Other Components: */

/* Images: */

/* Other .js Files: */


const CollectionsOverview = () => {

    const shopItemsSelector = useSelector( state => state.shop.shop_items );

    return (
        <div className='collections-overview'>
            {
                shopItemsSelector.map( singleCategory => {
                    return <CollectionPreview
                        key = { singleCategory.id }
                        title = { singleCategory.title }
                        items = { singleCategory.items }
                    />
                } )
            }
        </div>
    )
}


export default CollectionsOverview;