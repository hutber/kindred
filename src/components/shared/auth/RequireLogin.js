//- Created by hutber on 15/07/16.  */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

//Actions
import * as userActions from '../../../actions/user/authActions';

class RequireLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Pin Number logic redirects
    const loggedIn = this.props.user.loggedIn;
    const needsPin = window.localStorage.getItem('firstReload') === 'true' && loggedIn;
    const safetyPin = this.props.pin.pinsMatch && loggedIn && needsPin;

    //1 hour timeout login
    const timeAgo = 60 * 60 * 1000;
    const anHourAgo = Date.now() - timeAgo;
    const tokenTime = this.props.user.tokenTime;
    const refreshAuthTime = tokenTime < anHourAgo;

    //Check if we are more than hour old to get a new token
    if (safetyPin || (refreshAuthTime && needsPin)) {
      return <Redirect push to="/safetypin" />;
    } else if (needsPin && !this.props.pin.pinFilledIn && this.props.pinPage !== '/pinconfirm') {
      return <Redirect push to="/pin" />;
    } else if (loggedIn) {
      if (loggedIn && this.props.user.token && refreshAuthTime) {
        this.props.retrieveUsersData({
          url: `${this.props.apiLive.endpoint}/${this.props.apiLive.utillist}`,
          token: this.props.user.token
        });
      }
      return <div />;
    } else {
      return <Redirect push to="/signin" />;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.auth,
    pin: state.user.pin,
    pinPage: state.router.location.pathname,
    apiLive: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    retrieveUsersData: bindActionCreators(userActions.retrieveUsersData, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(RequireLogin);
