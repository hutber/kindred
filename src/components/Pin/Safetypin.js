import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

//Auth
import RequireLogin from '../shared/auth/RequireLogin';
import * as pinAction from '../../actions/user/pinActions';
import * as authAction from '../../actions/user/authActions';

//Components
import Logo from '../shared/logo';

//diget
import PinDigit from './digit';

//Styles
import main from '../shared/main.css';
import style from './style.css';

class Pin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.pin.pinSafetyFilledIn && this.props.pin.pinsSafetyMatch) {
      this.props.deleteSafetyDigit();
      this.props
        .refreshAuth({
          url: `${this.props.api.endpoint}/${this.props.api.refreshauth}`
        })
        .then(refreshed => {
          if (refreshed) {
            const firstReload = window.localStorage.getItem('firstReload');
            if (firstReload) {
              window.localStorage.removeItem('firstReload');
            }
            return <Redirect push to="/home" />;
          }
        });
    }

    return (
      <div className={main.middle}>
        <div className={main.container}>
          <RequireLogin />
          <Logo />
          <h1>Enter Pin</h1>
          <p className={style.p}>
            {this.props.pin.pinSafetyFilledIn && !this.props.pin.pinsSafetyMatch
              ? 'Pin incorrect, please enter again'
              : 'Please enter your time to continue.'}
          </p>
          <div className={style.pinContainer}>
            {this.props.pin.pinSafety.map((item, index) => (
              <div key={`pinBox${index}`} className={`${style.pinItem} ${item !== null ? style.full : ''}`} />
            ))}
          </div>
          <div className={style.digitContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => <PinDigit digit={val} key={`pin${val}`} type="safety" />)}
            <PinDigit digit="forgotten" type="safety" />
            <PinDigit digit="0" type="safety" />
            <PinDigit digit="clear" type="safety" />
          </div>
        </div>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return {
    pin: state.user.pin,
    api: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    deleteSafetyDigit: bindActionCreators(pinAction.deleteSafetyDigit, dispatch),
    refreshAuth: bindActionCreators(authAction.refreshAuth, dispatch)
  };
}

export default connect(matchStateToProps, matchDispatchToProps)(Pin);
