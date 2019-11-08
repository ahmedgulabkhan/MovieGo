import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = (props) => {
    function handleLogout() {
        fetch('http://localhost:3001/api/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            alert("You have logged out of your account!");
            window.location.replace("http://localhost:3000");
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='header'>
            <div className='container logo-container'>
                <Link to='/' className='logo'>MovieGo</Link>
            </div>
            <div className='container options'>
                <Link to='/nowshowing' className='option'>Now Showing</Link>
                <Link to='/upcoming' className='option'>Upcoming</Link>
                <Link to='/popular' className='option'>Popular</Link>
            </div>
            <div className='container sign-in-container'>
                {
                    (props.isLoggedIn==='true') ? 
                    (<Link className='log-out' onClick={handleLogout}>Logout</Link>)
                    :
                    (<Link to='/signin' className='sign-in'>Sign In / Register</Link>)
                }
            </div>
        </div>
    );
}

export default Header;