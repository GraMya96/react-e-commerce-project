/* Dependencies: */
import React from 'react';

/* SCSS/CSS: */
import './with-spinner.scss';

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const WithSpinner = WrappedComponent => {

    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading
        ? (
            <p>Loading...</p>
        )
        : (
            <WrappedComponent { ...otherProps } />
        )
    }

    return Spinner;
}


export default WithSpinner;