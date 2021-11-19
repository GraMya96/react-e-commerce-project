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

    const shopItemsSelector = useSelector( state => state.shop.collections );
    let collectionsOverview;

    collectionsOverview = shopItemsSelector && Array.isArray( shopItemsSelector )
        ?   <div className='collections-overview'>
                {
                    shopItemsSelector.map( singleCategory => {
                        return <CollectionPreview
                            key = { singleCategory.id }
                            title = { singleCategory.title }
                            items = { singleCategory.items }
                        />
                    })
                }
            </div>
        : null;

    return collectionsOverview;
}


export default CollectionsOverview;