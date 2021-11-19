import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

/* With this configuration: we're telling redux-persist to use
    local storage to store our data. There's also sessionStorage etc. */
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

/* JSON object we use to config persist */
const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: [ /* text strings of all the reducers we want to store.
            The user is handled by Firebase authentication, so no need. */
        'cart'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer( persistConfig, rootReducer );

