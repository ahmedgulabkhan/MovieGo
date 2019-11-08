import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import NowShowing from './pages/now-showing/now-showing.component';
import Upcoming from './pages/upcoming/upcoming.component';
import Popular from './pages/popular/popular.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CollectionDetailsPage from './pages/collection-details-page/collection-details-page.component';

class App extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: 'false'
    }
  }

  onChange = (newState) => {
    this.setState({
      isLoggedIn: newState
    });
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/signedin', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(json => {
      if(json===true){
        this.setState({isLoggedIn: 'true'});
      }
      else{
        this.setState({isLoggedIn: 'false'});
      }
    })
    .catch(err => console.log(err))

  }
  
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} onAuthChange={this.onChange} />
        <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/nowshowing' component={NowShowing} />
            <Route path='/upcoming' component={Upcoming} />
            <Route path='/popular' component={Popular} />
            <Route path='/signin' component={() => <SignInAndSignUp onAuthChange={this.onChange} />}  />
            <Route path='/:imdbID' component={CollectionDetailsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
