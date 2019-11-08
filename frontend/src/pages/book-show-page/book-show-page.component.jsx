import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './book-show-page.styles.scss';

import BookShow from '../../components/book-show/book-show.component';
import PayPage from '../pay-page/pay-page.component';

const BookShowPage = ({ match }) => {
    return(
        <div>
            <Switch>
                <Route exact={true} path={`${match.path}`} component={BookShow} />
                <Route path={`${match.path}/:seat/pay`} component={PayPage} />
            </Switch>
        </div>
    );
}

export default BookShowPage;