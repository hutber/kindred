import React from 'react';
import { NavLink } from 'react-router-dom'
import store from '../../configureStore';
import {BlockForLoggedInUsers} from '../shared/auth/userRedirects'
import * as authAction from '../../actions/auth';

import Menu from '../shared/menu';
import Logo from '../shared/logo';


import loggedOut from '../Home/home.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'as',
      pw: 'as'
    };

    // Bind callback methods to make `this` the correct context.
    this.logIn = this.logIn.bind(this);
    this.changed = this.changed.bind(this);
  }

  changed = ( e ) => {
    let newDeets = {};
    newDeets[e.target.name] = e.target.value;
    this.setState(newDeets);
  };

  logIn = ( e ) => {
    e.preventDefault ();
    store.dispatch(authAction.submitLogin(this.state));
  };

  render(){
    return (
      <div className={loggedOut.home}>
        <BlockForLoggedInUsers />
        <Logo />
        <h2>Please sign in to your account</h2>
        <form role="form" onSubmit={this.logIn}>
          <input type="text" name="email" defaultValue={this.state.email} onChange={this.changed} placeholder="Enter email address"/>
          <input type="password" name="pw" defaultValue={this.state.pw} onChange={this.changed} placeholder="Password"/>
          <button>Sign In</button>
        </form>
        <div className={loggedOut.extraDetails}>
          <NavLink to="/signup">Don't have an account yet?</NavLink>
          <NavLink to="/skip" className={loggedOut.extraDetailsRight}>Skip</NavLink>
        </div>
        <Menu />
      </div>
    );
  }
}

export default SignIn;
