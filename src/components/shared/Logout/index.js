import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logo from '../../shared/logo';
import { NavLink } from 'react-router-dom';
import BlockForLoggedInUsers from '../../shared/auth/BlockForLoggedInUsers';

//Actions
import * as authCreators from '../../../actions/user/authActions';

//styles
import userStyles from '../../shared/userPages/userPages.css';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.doLogout();
  }

  render() {
    return (
      <div className={`${userStyles.home} ${userStyles.loginButton}`}>
        <div>
          <NavLink to="/signin">
            <Logo />
            <BlockForLoggedInUsers />
            <h1>You have been logged out</h1>
            <p>Please track with us again</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { doLogout: bindActionCreators(authCreators.doLogout, dispatch) };
}

export default connect(null, mapDispatchToProps)(Logout);
