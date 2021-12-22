import React, { useState } from 'react';
import './sign-up.scss';

import Input from '../input/input.jsx';
import Button from '../button/button.jsx';

import { auth, createUserProfileDocument } from '../../firebase/firebase.config';
import UserMessage from '../../UI/user-message/user-message';


const SignUp = props => {

    const [ userSignUp, setUserSignUp ] = useState( {

        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''

    } );

    const { displayName, email, password, confirmPassword } = userSignUp;

    const [ error, setError ] = useState({
        isError: false,
        message: ''
    });

    const handleChange = ( event ) => {

        setUserSignUp( prevState => {

            return {
                ...prevState,
                [ event.target.name ] : event.target.value
            }

        } )
    }

    const handleSubmit = async ( event ) => {
        event.preventDefault();


        if( password !== confirmPassword ) {
            alert("Password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword( email, password );
            // using this function from the auth object we imported from firebase.config,
            // we get back an object which we destructured into 'user'.
            // REMEMBER to first authorize email and password auth on the Firebase back-end

            await createUserProfileDocument( user, { displayName } );

            // we are gonna await for createUserProfileDocument to finish
            // and then change the state to its original values, clearing
            // the form
            setUserSignUp( {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            } )

        }
        catch( error ) {
            setError({
                isError: true,
                message: error.message
            });
        }
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={ handleSubmit } className="sign-up-form">
                <Input
                    type="text"
                    name="displayName"
                    value={ displayName }
                    onChange={ handleChange }
                    label="Display Name"
                    required />

                <Input
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                    label="Email"
                    required />

                <Input
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ handleChange }
                    label="Password"
                    required />

                <Input
                    type="password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={ handleChange }
                    label="Confirm Password"
                    required />

                <Button
                    type="submit">
                    Sign Up
                </Button>

                { error.isError
                    && <UserMessage
                        type="error"
                        marginTop
                        marginBottom
                        text={ error.message } />
                }

            </form>
        </div>
    )

}


export default SignUp;