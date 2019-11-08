import React from 'react';
import './popular.styles.scss';
import MOVIE_DATA from '../../assets/movie.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class Popular extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: MOVIE_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className='popular-container'>
                <h1>Popular</h1>
                <CollectionPreview collectionType='popular-direct' collections={collections} />
            </div>
        )
    }
}

export default Popular;