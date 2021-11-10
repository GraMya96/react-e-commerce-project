/* Same thing as defining an initial state in our components
    (either using this.state in class components or useState in functional components) */
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;

