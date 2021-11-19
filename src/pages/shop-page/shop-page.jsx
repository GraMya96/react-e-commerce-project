import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import './shop-page.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';

import { useDispatch } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchCollectionsStartAsync() );
    }, [])

    const match = useRouteMatch();

    return (
        <div className="shop-page">
            <Route
                exact
                path={ `${ match.path }` }
                component={ CollectionsOverview }
            />

            <Route
                path={ `${ match.path }/:category` }
                component={ CollectionPage }
            />
        </div>
    )

}

export default ShopPage;