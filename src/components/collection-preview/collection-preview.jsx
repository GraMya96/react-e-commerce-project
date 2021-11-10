import React from 'react';
import CollectionItem from '../collection-item/collection-item.jsx';
import './collection-preview.scss';


const CollectionPreview = ( { title, items } ) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{ title.charAt(0).toUpperCase() + title.slice(1) }</h1>
            <div className="preview">

                {
                    items
                        .filter( ( item, index ) => { return index < 4 } ) //show only the first 4 results
                        //for any Product Category
                        .map( item => {
                        return (
                            <CollectionItem
                                key={ item.id }
                                item={ item }
                            />
                        )
                    } )
                }

            </div>
        </div>
    )

}


export default CollectionPreview;