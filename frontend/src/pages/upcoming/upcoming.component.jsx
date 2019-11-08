import React from 'react';
import './upcoming.styles.scss';
import MOVIE_DATA from '../../assets/movie.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class Upcoming extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: MOVIE_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className='upcoming-container'>
                <h1>Upcoming</h1>
                <CollectionPreview collectionType='upcoming-direct' collections={collections} />
            </div>
        )
    }
}

export default Upcoming;