import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

//Auth
import RequireLogin from '../shared/auth/RequireLogin';
import * as pinAction from '../../actions/user/pinActions';

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

  componentWillMount() {
    this.props.deleteDigit();
  }

  render() {
    if (this.props.pin.pinFilledIn) return <Redirect push to="/pinconfirm" />;

    return (
      <div className={main.middle}>
        <div className={main.container}>
          <RequireLogin />
          <Logo />
          <h1>Security check</h1>
          <p className={style.p}>We'll keep all your data secure and anonymous. Please chose a 4 digit pin code for extra protection</p>
          <div className={style.pinContainer}>
            {this.props.pin.pin.map((item, index) => (
              <div key={`pinBox${index}`} className={`${style.pinItem} ${item !== null ? style.full : ''}`} />
            ))}
          </div>
          <div className={style.digitContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => <PinDigit digit={val} key={`pin${val}`} />)}
            <PinDigit digit="forgotten" />
            <PinDigit digit="0" />
            <PinDigit digit="clear" />
          </div>
        </div>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return {
    pin: state.user.pin,
    dates: state.dates.dates
  };
}

function matchDispatchToProps(dispatch) {
  return {
    deleteDigit: bindActionCreators(pinAction.deleteDigit, dispatch)
  };
}

export default connect(matchStateToProps, matchDispatchToProps)(Pin);
