import React, { useState } from 'react';
import Input from '../input/input.jsx';
import Button from '../button/button.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.config';
import './sign-in.scss';


const SignIn = props => {

    const [ inputField, setInputField ] = useState( {
        email: '',
        password: ''
    } );

    const { email, password } = inputField;

    const handleChange = event => {
        setInputField( prevState => {

            return {
                ...prevState,
                [ event.target.name ] : event.target.value
            }

        } )
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword( email, password );

            setInputField( {
                email: '',
                password: ''
            } )
        }
        catch( error ) {
            console.log( error );
        }
    }

    return (

        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>

                <Input
                    name="email"
                    id="email"
                    handleChange={ handleChange }
                    value={ inputField.email }
                    label="email" />

                <Input
                    name="password"
                    id="password"
                    handleChange={ handleChange }
                    value={ inputField.password }
                    label="password" />



                <div className="buttons">
                    <Button
                        type="submit">
                        Sign In
                    </Button>
                    <Button
                        isGoogleSignIn
                        type="button"
                        onClick={ signInWithGoogle }>
                        Sign In with Google
                    </Button>
                </div>

            </form>
        </div>

    )

}


export default SignIn;