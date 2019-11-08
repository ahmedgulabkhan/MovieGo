import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './pay-page.styles.scss';

class PayPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fullName: '',
            username: '',
            city: '',
            state: '',
            zip: '',
            nameOnCard: '',
            cardNumber: '',
            expirationMonth: '',
            expirationYear: '',
            cvv: '',
            bookingDetails: props.match.params.imdbID + '/' + props.match.params.date + '/' + props.match.params.show + '/' + props.match.params.seat
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.fullName==='' || this.state.username==='' || this.state.city==='' || this.state.state==='' || 
        this.state.zip==='' || this.state.nameOnCard==='' || this.state.cardNumber==='' || this.state.expirationMonth==='' || 
        this.state.expirationYear==='' || this.state.cvv===''){
            alert('Please fill out all the fields');
        }

        else{
            fetch('http://localhost:3001/api/pay',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(this.state)
            })
            .then(res => {
                if(res.status === 400){
                    alert("ERROR: Fill all the required fields");
                }
                else{
                    alert("Payment done, booked seat successfully. You'll be redirected to your homepage");
                    this.props.history.push('/');
                }
            })
            .catch(err => console.log(err));
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='pay-container'>
                <h2>Booking the seat {this.props.match.params.seat} at {this.props.match.params.show}hrs on {this.props.match.params.date} of {this.props.match.params.Title.replace(/\+/g, " ")}</h2>
                <div className='pay-form-container'>
                    <form>
                        <input className='input' name='fullName' type='text' label="Full Name" placeholder='Full Name' value={this.state.fullName} onChange={this.handleChange} required />
                        <input className='input' name='username' type='email' label='Email' placeholder='Email' value={this.state.username} onChange={this.handleChange} required />
                        <input className='input' name='city' type='text' label='City' placeholder='City' value={this.state.city} onChange={this.handleChange} required />
                        <input className='input' name='state' type='text' label='State' placeholder='State' value={this.state.state} onChange={this.handleChange} required />
                        <input className='input' name='zip' type='text' label='Zip' placeholder='Zip' value={this.state.zip} onChange={this.handleChange} required />
                        <input className='input' name='nameOnCard' type='text' label='Name on Card' placeholder='Name on Card' value={this.state.nameOnCard} onChange={this.handleChange} required />
                        <input className='input' name='cardNumber' type='text' label='Card Number' placeholder='Card Number' value={this.state.cardNumber} onChange={this.handleChange} required />
                        <input className='input' name='expirationMonth' type='text' label='Expiration Month' placeholder='Expiration Month' value={this.state.expirationMonth} onChange={this.handleChange} required />
                        <input className='input' name='expirationYear' type='text' label='Expiration Year' placeholder='Expiration Year' value={this.state.expirationYear} onChange={this.handleChange} required />
                        <input className='input' name='cvv' type='text' label='CVV' placeholder='CVV' value={this.state.cvv} onChange={this.handleChange} required />
                        <div>
                            <button className='button' type='submit' onClick={this.handleSubmit}>Make Payment</button>
                            <span>Total amount to be paid: Rs.100</span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PayPage;