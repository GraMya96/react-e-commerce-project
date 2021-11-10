import firebase from "firebase/app";

// Importing just what we need respectively for DB storage and Authentication:
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBDxxMkgjnGo8kFtz8TKFqP4chB3-Aqhmw",
    authDomain: "react-e-commerce-8b036.firebaseapp.com",
    projectId: "react-e-commerce-8b036",
    storageBucket: "react-e-commerce-8b036.appspot.com",
    messagingSenderId: "256308915556",
    appId: "1:256308915556:web:426b3a3797dca87922de71"
};

// Initialize Firebase
firebase.initializeApp( config ) ;

// Exporting to use them whenever we need them:
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async ( user, additionalData ) => {
    if( !user ) {
        return;
    }
    else {
        // the two types of objects that Firebase can
        // give us back: the Reference and the Snapshot, which
        // contains the actual data about our request.
        // Using the CRUD methods get(), set(), update(), delete() etc.
        // on the reference, we retrieve the object data review

        const userReference = firestore.doc(`users/${user.uid}`);

        const userSnapShot = userReference.get();

        if( !userSnapShot.exists ) {
            // If the user Snaphot doesn't exist, we create it...
            // we create a new User on the DB based on our userAuth object

            const { displayName, email } = user;
            const createdAt = new Date();

            try {
                await userReference.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }
            catch( error ) {
                console.log("Error creating user!", error.message);
            }

            return userReference;

        }
    }
}

const provider = new firebase.auth.GoogleAuthProvider(); // Google Sign In Authentication

provider.setCustomParameters( {
    prompt: 'select_account'
} );

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider) // we use the Google sign-in popup,
    // but there are others, such as Twitter etc.
    // To make it work, we also need to activate it in our Firebase account
    // (Authentication --> Google)
}