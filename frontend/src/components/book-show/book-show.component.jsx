import React from 'react';
import { Link } from 'react-router-dom';

import './book-show.styles.scss';

const BookShow = ({ match }) => {
    fetch('http://localhost:3001/api/seats',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({bookingDetails: match.params.imdbID + '/' + match.params.date + '/' + match.params.show + '/'})
    })
    .then(res => res.json())
    .then(json => {
        var reservedSeats = new Array();
        for(var obj in json){
            var len = json[obj].booking.length;
            //console.log(json[obj].booking[len-2] + json[obj].booking[len-1]);
            reservedSeats.push(json[obj].booking[len-2] + json[obj].booking[len-1]);
        }
        for(var seat=0;seat<reservedSeats.length;seat++){
            console.log(seat);

            document.getElementById(reservedSeats[seat]).className = 'reserved';
        }
        //console.log(reservedSeats[0]);
    })
    .catch(err => console.log(err));

    return(
        <div className='seat-list-container'>
            <h1>These are all the available seats</h1>
            <div className='seat-list'>
                <Link to={`${match.url}/01/pay`} id='01' className='link'>01</Link>
                <Link to={`${match.url}/02/pay`} id='02' className='link'>02</Link>
                <Link to={`${match.url}/03/pay`} id='03' className='link'>03</Link>
                <Link to={`${match.url}/04/pay`} id='04' className='link'>04</Link>
                <Link to={`${match.url}/05/pay`} id='05' className='link'>05</Link>
                <Link to={`${match.url}/06/pay`} id='06' className='link'>06</Link>
                <Link to={`${match.url}/07/pay`} id='07' className='link'>07</Link>
                <Link to={`${match.url}/08/pay`} id='08' className='link'>08</Link>
                <Link to={`${match.url}/09/pay`} id='09' className='link'>09</Link>
                <Link to={`${match.url}/10/pay`} id='10' className='link'>10</Link>
                <br/>
                <br/>
                <br/>
                <Link to={`${match.url}/11/pay`} id='11' className='link'>11</Link>
                <Link to={`${match.url}/12/pay`} id='12' className='link'>12</Link>
                <Link to={`${match.url}/13/pay`} id='13' className='link'>13</Link>
                <Link to={`${match.url}/14/pay`} id='14' className='link'>14</Link>
                <Link to={`${match.url}/15/pay`} id='15' className='link'>15</Link>
                <Link to={`${match.url}/16/pay`} id='16' className='link'>16</Link>
                <Link to={`${match.url}/17/pay`} id='17' className='link'>17</Link>
                <Link to={`${match.url}/18/pay`} id='18' className='link'>18</Link>
                <Link to={`${match.url}/19/pay`} id='19' className='link'>19</Link>
                <Link to={`${match.url}/20/pay`} id='20' className='link'>20</Link>
                <br/>
                <br/>
                <br/>
                <Link to={`${match.url}/21/pay`} id='21' className='link'>21</Link>
                <Link to={`${match.url}/22/pay`} id='22' className='link'>22</Link>
                <Link to={`${match.url}/23/pay`} id='23' className='link'>23</Link>
                <Link to={`${match.url}/24/pay`} id='24' className='link'>24</Link>
                <Link to={`${match.url}/25/pay`} id='25' className='link'>25</Link>
                <Link to={`${match.url}/26/pay`} id='26' className='link'>26</Link>
                <Link to={`${match.url}/27/pay`} id='27' className='link'>27</Link>
                <Link to={`${match.url}/28/pay`} id='28' className='link'>28</Link>
                <Link to={`${match.url}/29/pay`} id='29' className='link'>29</Link>
                <Link to={`${match.url}/30/pay`} id='30' className='link'>30</Link>
            </div>
        </div>
    );
}

export default BookShow;