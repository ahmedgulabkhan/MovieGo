import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './book-date-page.styles.scss';

import BookDate from '../../components/book-date/book-date.component';
import BookShowPage from '../book-show-page/book-show-page.component';

const BookDatePage = ({ match }) => {
    return(
        <div>
            <Switch>
                <Route exact={true} path={`${match.path}`} component={BookDate} />
                <Route path={`${match.path}/:show`} component={BookShowPage} />
            </Switch>
        </div>
    );
}

export default BookDatePage;