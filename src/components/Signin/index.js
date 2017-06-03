import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import {BlockForLoggedInUsers} from '../shared/auth/userRedirects'
import Logo from '../shared/logo';
import userStyles from '../shared/userPages/userPages.css';
import ShowResults from './showResults';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
  render(){
    return (
      <div className={userStyles.home}>
        <BlockForLoggedInUsers />
        <Logo />
        <h1>Welcome to <br /> Kindred</h1>
        <p>Please sign in to your account</p>
        <SignInForm onSubmit={ShowResults} />
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

