import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import Logo from '../../shared/logo';
import { NavLink } from 'react-router-dom'
import userStyles from '../../shared/userPages/userPages.css';
import {BlockForLoggedInUsers} from '../../shared/auth/userRedirects'
import * as authCreators from '../../../actions/userActions'

class Logout extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.doLogout();
  }

  render(){
    return (
      <div className={userStyles.home}>
        <Logo />
        <BlockForLoggedInUsers />
        <h1>You have been logged out</h1>
        <p>Please track with us again</p>
        <NavLink to="/signin">Sign In</NavLink>
        <p>x</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { doLogout: bindActionCreators(authCreators.doLogout, dispatch) }
}

export default connect(null, mapDispatchToProps)(Logout);

