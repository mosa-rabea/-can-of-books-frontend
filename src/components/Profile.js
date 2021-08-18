import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
class Profile extends Component {
  
    render() { 
        return ( <div >
        {this.props.auth0.isAuthenticated && (
          <div>
            <img
              style={{ width: "50%" }}
              src={this.props.auth0.user.picture}
              alt={this.props.auth0.user.name}
            />
          
              <p>{this.props.auth0.user.name}</p>
              <p>{this.props.auth0.user.email}</p>
           
          </div>
        )}
      </div> );
    }
}
 
export default withAuth0(Profile);