import React from 'react';
import './sign-in.styles.scss';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
     
    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/signin',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
        .then(res => {
            if(res.status === 401){
                alert("ERROR: Invalid Email and/or Password combination!");
                window.location.reload();
            }
            else if(res.status === 400){
                alert("ERROR: Fill all the required fields");
            }
            else{
                this.props.onAuthChange('true');
                this.props.history.push('/');
            }
        })
        .catch(err => console.log(err));
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in-container'>
                <h2>Already have an Account?</h2>
                <span>Sign In with your Email and Password</span>
                <div className='form-container'>
                    <form>
                        <input className='input' name='username' type='email' label='email' placeholder='Email' value={this.state.username} onChange={this.handleChange} required />
                        <input className='input' name='password' type='password' label='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
                        <button className='button' type='submit' onClick={this.handleSubmit}>Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);