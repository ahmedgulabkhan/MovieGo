import React from 'react';
import './collection-item.styles.scss';
import { Link } from 'react-router-dom';

const CollectionItem = ({Poster, imdbRating, imdbID, Title, collectionType}) => (
    <Link to={`/${imdbID}`} className='collection-item'>
        <div className='image-container'>
            <img className='image' alt={Title} src={`${Poster}`} />
        </div>
        {
            (() => {
                if(collectionType==='upcoming-direct' ||  collectionType==='upcoming-indirect'){
                    return(
                        <div className='collection-footer'>
                            <span className='title'>{Title}</span>
                        </div>
                    );
                }

                else{
                    return(
                        <div className='collection-footer'>
                            <span className='title'>{Title}</span>
                            <span className='rating'>{imdbRating*10}%</span>
                        </div>
                    );
                }
            })()
        }
    </Link>
)

export default CollectionItem;