import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store, persistor } from "./redux/store";

import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(

	<React.StrictMode>
		{/* Provider component is needed to make the Store and the Reducer functions accessible in our whole App  */}
		<Provider
			store={store}>
			<BrowserRouter
				basename='/'>
				<PersistGate
					persistor = { persistor }>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')

);


