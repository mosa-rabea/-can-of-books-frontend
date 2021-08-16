import React, { Component } from 'react';
import Login from './components/Login';

import Profile from './components/Profile';
import BestBooks from './components/BestBooks';
import Header from './components/Header';
import Footer from './components/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
            {this.props.auth0.isAuthenticated ? <BestBooks/> : <Login />}
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
