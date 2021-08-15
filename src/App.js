import React, { Component } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

import Home from './components/Home';
import Nav from './components/Nav';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
        <Router>
          <Switch>
          <Route path='/home'>
             <Home/>
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
