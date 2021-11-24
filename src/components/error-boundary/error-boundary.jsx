/* Dependencies: */
import React, {Component} from 'react';

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError( error ) {
        // Process the error... this method
        // allows us to detect any errors in all the children
        // of this component (which of course
        // will wrap up our component which are more likely to get
        // an error)
        return {
            hasErrored: true
        }
    }

    componentDidCatch( error, info ) {
        console.log(error);
    }

    render() {
        if( this.state.hasErrored ) {
            return <div>Something went wrong. An error occured!</div>
        }
        else {
            return this.props.children;
        }
    }
}


export default ErrorBoundary;