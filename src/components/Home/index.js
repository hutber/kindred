import React from 'react';
import {Redirect} from 'react-router'
import Logo from '../shared/logo/index';
import * as authStates from '../shared/auth/requireLogin';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.requireLogin = authStates.requireLogin;
  }

  render(){
    return (
      <div>
        <this.requireLogin />
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
