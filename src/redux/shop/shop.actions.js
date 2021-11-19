import { firestore, convertConnectionSnapshotToMap } from "../../firebase/firebase.config";

export const fetchCollectionsStart = () => {
    return {
        type: 'FETCH_COLLECTIONS_START'
    }
}
export const fetchCollectionsSuccess = collectionsMap => {
    return {
        type: 'FETCH_COLLECTIONS_SUCCESS',
        payload: collectionsMap
    }
}
export const fetchCollectionsFailure = errorMessage => {
    return {
        type: 'FETCH_COLLECTIONS_FAILURE',
        payload: errorMessage
    }
}

// Async action handled through Redux Thunk:
// thanks to these lines of code, we
// can dispatch multiple actions asynchronously
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch( fetchCollectionsStart() );

        collectionRef.get()
            .then( snapshot => {
                const collectionsMap = convertConnectionSnapshotToMap( snapshot );
                dispatch( fetchCollectionsSuccess( collectionsMap ) );
            } )
            .catch( error => {
                dispatch( fetchCollectionsFailure( error.message ) );
            } )
    }
}
