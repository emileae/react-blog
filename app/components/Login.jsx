import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Admin Login</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with Facebook account below.
              </p>
              <button className="button" onClick={this.onLogin}>Login with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(Login);