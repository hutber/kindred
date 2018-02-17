import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router'

//Auth
import RequireLogin from '../shared/auth/RequireLogin'
import * as pinAction from '../../actions/user/pinActions'

//Components
import Logo from '../shared/logo';

//diget
import PinDigit from './digit';

//Styles
import main from '../shared/main.css';
import style from './style.css';

class Pin extends React.Component {
  constructor (props){
    super(props);

    this.state = {};
  }

	componentWillMount(){
		this.props.deleteConfirmDigit();
	}

	render(){
	  if(this.props.pin.pinConfirmFilledIn && this.props.pin.pinsMatch) {
		  window.localStorage.removeItem('firstReload');
		  return (<Redirect push to="/home"/> );
	  }

	  if(!this.props.pin.pinFilledIn)
	  	return (<Redirect push to="/pin" /> );

	  return (
      <div className={main.middle}>
	      <div className={main.container}>
		      <RequireLogin />
		      <Logo />
		      <h1>Confirm Pin</h1>
		      <p className={style.p}>{this.props.pin.pinConfirmFilledIn && !this.props.pin.pinsMatch ? 'Please re-enter your confirmation pin. Currently your pins do not match' : 'Please confirm your pin by entering it again. This will save your pin for when you need to login again.'}</p>
		      <div className={style.pinContainer}>
			      {this.props.pin.pinConfirm.map((item, index) => <div key={`pinBox${index}`} className={`${style.pinItem} ${item!==null ? style.full : ''}`}></div>)}
		      </div>
			      <div className={style.digitContainer}>
			      {[1,2,3,4,5,6,7,8,9].map((val) => <PinDigit digit={val} key={`pin${val}`} type="confirm" /> )}
			      <PinDigit digit="forgotten" type="confirm" />
			      <PinDigit digit="0" type="confirm" />
			      <PinDigit digit="clear" type="confirm" />
			      </div>
	      </div>
      </div>
    );
  }
}

function matchStateToProps(state){
  return {
  	pin: state.user.pin,
    dates: state.dates.dates
  }
}

function matchDispatchToProps(dispatch){
	return {
		deleteConfirmDigit : bindActionCreators(pinAction.deleteConfirmDigit, dispatch)
	}
}


export default connect(matchStateToProps,matchDispatchToProps)(Pin);
