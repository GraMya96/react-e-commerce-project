import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import './shop-page.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';

const ShopPage = () => {

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