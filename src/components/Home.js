import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
export class Home extends Component {
      render() {
            return (
                  <div>
                        <h1>I need full mark</h1>
                  </div>
            )
      }
}

export default withAuth0(Home)
