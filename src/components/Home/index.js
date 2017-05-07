import React from 'react';
import {Redirect} from 'react-router'
import Logo from '../shared/logo/index';
import {RequireLogin} from '../shared/auth/requireLogin'

class Home extends React.Component {
  render(){
    return (
      <div>
        <RequireLogin />
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
