import React from 'react';
import { Link } from 'react-router-dom';

import './book-date.styles.scss';

const BookDate = ({ match }) => {
    return(
        <div className='show-list-container'>
            <h1>These are all the available shows</h1>
            <div className='show-list'>
                <Link to={`${match.url}/07:45`}><span>07:45</span></Link>
                <Link to={`${match.url}/11:30`}><span>11:30</span></Link>
                <Link to={`${match.url}/15:30`}><span>15:30</span></Link>
                <Link to={`${match.url}/18:00`}><span>18:00</span></Link>
                <Link to={`${match.url}/21:55`}><span>21:55</span></Link>
            </div>
        </div>
    );
}

export default BookDate;