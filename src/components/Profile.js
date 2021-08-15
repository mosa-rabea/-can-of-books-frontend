import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
export class Profile extends Component {
  render() {
        console.log(this.props)
    return (
      <div>
    {
          this.props.auth0.isAuthenticated&&
<>
        <h1>Username:{this.props.auth0.user.name}</h1>
        <h2>email:{this.props.auth0.user.email}</h2>
        <img src={this.props.auth0.user.picture} alt='hello' />
    </>
    }
      </div>
     
    );
  }
}

export default withAuth0(Profile)
