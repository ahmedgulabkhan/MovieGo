import React from 'react';
import './sign-up.styles.scss';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fullName: '',
            username: '',
            contactNumber: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.password === this.state.confirmPassword) {
            fetch('http://localhost:3001/api/register',{
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
                    alert("ERROR: This Email already exists! Try to Sign-in");
                    window.location.reload();
                }
                else if(res.status === 400){
                    alert("ERROR: Fill all the required fields");
                }
                else{
                    alert('Registered successfully!');
                    this.props.onAuthChange('true');
                    this.props.history.push('/');
                }
            })
            .catch(err => console.log(err));
        }
        else {
            alert("Password and Confirm Password fields do not match!");
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-up-container'>
                <h2>Not Registered Yet?</h2>
                <span>Create an Account</span>
                <div className='form-container'>
                    <form>
                        <input className='input' name='fullName' type='text' label="Full Name" placeholder='Full Name' value={this.state.fullName} onChange={this.handleChange} required />
                        <input className='input' name='username' type='email' label='Email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required />
                        <input className='input' name='contactNumber' type='text' label='Contact Number' placeholder='Contact Number' value={this.state.contactNumber} onChange={this.handleChange} required />
                        <input className='input' name='password' type='password' label='Password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
                        <input className='input' name='confirmPassword' type='password' label='Confirm Password' placeholder='Confirm Password' value={this.state.confirmPassword} onChange={this.handleChange} required />
                        <button className='button' type='submit' onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);