import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({collectionType, collections}) => (
    <div className='collection-preview'>
        {
            (() => {
                let collectionsNowShowing = collections;
                let collectionsPopular = [...collections].sort((a, b) => (b.imdbRating-a.imdbRating));
                collectionsNowShowing = collectionsNowShowing.filter((collection, idx) => collection.Year<2013);
                collectionsPopular = collectionsPopular.filter((collection, idx) => collection.Year<2013);
                let collectionsUpcoming = [...collections].filter((collection, idx) => collection.Year >= 2013);

                if(collectionType==='now-showing-indirect'){
                    return(collectionsNowShowing.filter((collection, idx) => idx<10).
                    map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }

                else if(collectionType==='now-showing-direct'){
                    return(collectionsNowShowing.filter((collection, idx) => idx<40).
                    map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }

                else if(collectionType==='upcoming-indirect'){
                    return(collectionsUpcoming.filter((collection, idx) => idx<10).
                    map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} collectionType={collectionType} />
                    ))
                }

                else if(collectionType==='upcoming-direct'){
                    return(collectionsUpcoming.filter((collection, idx) => idx<40).
                    map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} collectionType={collectionType} />
                    ))
                }

                else if(collectionType==='popular-indirect'){
                    return(collectionsPopular.filter((collection, idx) => idx<10).
                    map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }

                else{
                    return(collectionsPopular.filter((collection, idx) => idx<40).
                    map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }
            })()
        }
    </div>
)

export default CollectionPreview;