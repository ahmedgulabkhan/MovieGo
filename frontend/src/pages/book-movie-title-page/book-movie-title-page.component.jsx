import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './book-movie-title-page.styles.scss';

import BookMovieTitle from '../../components/book-movie-title/book-movie-title.component';
import BookDatePage from '../book-date-page/book-date-page.component';

const BookMovieTitlePage = ({ match }) => {
    return(
        <div>
            <Switch>
                <Route exact={true} path={`${match.path}`} component={BookMovieTitle} />
                <Route path={`${match.path}/:date`} component={BookDatePage} />
            </Switch>
        </div>
    );
}

export default BookMovieTitlePage;