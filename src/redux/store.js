import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";

import thunk from 'redux-thunk';

import rootReducer from "./root-reducer";

const middlewares = [ thunk ];

if( process.env.NODE_ENV === 'development' ) {
    // A variable stored in Node which reate-react-app
    // makes accessible through process.env and
    // which changes depending on whether we are in
    // 'npm start' mode or 'npm run build' mode
    middlewares.push( logger );
}

export const store = createStore( rootReducer, applyMiddleware( ...middlewares ) );

export const persistor = persistStore( store );



