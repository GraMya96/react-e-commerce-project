import React from 'react';
import './input.scss';


const Input = ( { handleChange, label, ...otherProps } ) => {

    return (
        <div className="group">
            <input className="form-input" onChange={ handleChange } { ...otherProps } />
            {
                label
                    ? <label htmlFor="" className={ otherProps.value && otherProps.value.length ? "form-input-label shrink" : "form-input-label" } >
                        { label }
                    </label>
                    : null
            }

        </div>
    )

}


export default Input;