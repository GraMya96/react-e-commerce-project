import React, { useEffect, lazy, Suspense } from 'react';

import Header from './components/header/header.jsx';
import ErrorBoundary from './components/error-boundary/error-boundary.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import { auth, createUserProfileDocument } from './firebase/firebase.config';

/* Redux Actions */
import { setCurrentUser } from './redux/user/user.actions';

/* Lazy Loaded Pages */
const Homepage = lazy(() => import( './pages/homepage/homepage.jsx' ));
const ShopPage = lazy(() => import( './pages/shop-page/shop-page.jsx' ));
const CheckoutPage = lazy(() => import( './pages/checkout/checkout.jsx' ));
const SignInSignUpPage = lazy(() => import( './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.jsx' ));


const App = () => {

	const currentUser = useSelector( state => state.user.currentUser );
	//const collectionsForPreview = useSelector( state => state.shop.shop_items );
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

			if( user && user !== null ) {
				const userReference = await createUserProfileDocument( user );
				userReference.onSnapshot( snapshot => {

					dispatch( setCurrentUser( {
						id: snapshot.id,
						...snapshot.data()
					} ) );

				});
			}

			else {
				dispatch( setCurrentUser( user ) ); //the equivalent of saying user: null
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
				<ErrorBoundary>
					<Suspense fallback={ <div>...</div> }>
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
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>

	);

}

export default App;
