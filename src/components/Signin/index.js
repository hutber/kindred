import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import store from '../../configureStore';
import {BlockForLoggedInUsers} from '../shared/auth/userRedirects'
import * as authAction from '../../actions/auth';

import Menu from '../shared/menu';
import Logo from '../shared/logo';


import userStyles from '../shared/userPages/userPages.css';
import styles from '../Home/home.css';

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
    console.info(store.getState());
  };

  render(){
    return (
      <div className={userStyles.home}>
        <BlockForLoggedInUsers />
        <form role="form" onSubmit={this.logIn}>
          <Logo />
          <h1>Welcome to <br /> Kindred</h1>
          <p>Please sign in to your account</p>
          <input type="text" name="email" defaultValue={this.state.email} onChange={this.changed} placeholder="Enter email address"/>
          <input type="password" name="pw" defaultValue={this.state.pw} onChange={this.changed} placeholder="Password"/>
          <button>Sign In</button>
        </form>
        <div className={userStyles.extraDetails}>
          <NavLink to="/signup">Don't have an account yet?</NavLink>
          <NavLink to="/skip" className={userStyles.extraDetailsRight}>Skip</NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(SignIn);
