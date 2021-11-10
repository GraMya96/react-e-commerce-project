import React, { useEffect } from 'react';
import Homepage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop-page/shop-page.jsx';
import CheckoutPage from './pages/checkout/checkout.jsx';
import Header from './components/header/header.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import SignInSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.config';

/* Redux Actions */
import { setCurrentUser } from './redux/user/user.actions';


const App = () => {

	const currentUser = useSelector( state => state.user.currentUser );
	const dispatch = useDispatch();

	let unsubscribeFromAuth = null;

	useEffect(() => {

		unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
			/* We are using an authentication method from the auth
				object we imported (firebase config).
				Firebase is aware of which user is doing what. The parameter
				of the function -user in this case- is an object representing
				the "state" of a user, whether they are still logged in or not etc.


				If the user is not already in the DB, using this imported
				function we create one, based on the data of the user object */

			if( user ) {
				const userReference = await createUserProfileDocument( user );
				userReference.onSnapshot( ( snapshot ) => {

					dispatch( setCurrentUser( {
						id: snapshot.id,
						...snapshot.data()
					} ) );

				});
			}

			else {
				dispatch( setCurrentUser( user ) );
			}


		} )

		return () => { /* componentWillUnmount-like */
			unsubscribeFromAuth();
		}

	}, [])

	return (

		<div className="App">
			{/* We put the Header inside the app, but on every page,
			hence before all the different routes we have */}
			<Header />

			<Switch>
				<Route
					exact
					path="/"
					component={ Homepage }
				/>

				<Route
					path="/shop"
					component={ ShopPage }
				/>

				<Route
					path="/checkout"
					component={ CheckoutPage }
				/>

				<Route
					path="/sign-in"
					render={ () => currentUser
							? <Redirect to='/' />
							: <SignInSignUpPage />
					}
				/>
			</Switch>
		</div>

	);

}

export default App;
