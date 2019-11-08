import React from 'react';
import './now-showing.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import MOVIE_DATA from '../../assets/movie.data';

class NowShowing extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: MOVIE_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
        <div className='now-showing-container'>
            <h1>Now Showing</h1>
            <CollectionPreview collectionType='now-showing-direct' collections={collections} />
        </div>
        );
    }
}

export default NowShowing;