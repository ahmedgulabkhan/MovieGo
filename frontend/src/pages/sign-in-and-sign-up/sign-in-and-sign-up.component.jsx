import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = (props) => {
    return (
        <div className='sign-in-and-sign-up-page-container'>
            <h1>Log In or Create an Account</h1>
            <div className='sign-in-and-sign-up-container'>
                <SignIn onAuthChange={props.onAuthChange} />
                <SignUp onAuthChange={props.onAuthChange} />
            </div>
        </div>
    )
}

export default SignInAndSignUp;