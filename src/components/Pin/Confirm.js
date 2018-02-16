import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router'

//Auth
import RequireLogin from '../shared/auth/RequireLogin'
import * as datesSexAction from '../../actions/datesSexAction'

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

  render(){
	  if(this.props.pin.pinConfirmFilledIn)
	  	return (<Redirect push to="/home" /> );

	  return (
      <div className={main.middle}>
	      <div className={main.container}>
		      <RequireLogin />
		      <Logo />
		      <h1>Confirm Pin</h1>
		      <p className={style.p}>Please confirm your pin by entering it again. This will save your pin for when you need to login again.</p>
		      <div className={style.pinContainer}>
			      {this.props.pin.pinConfirm.map((item, index) => <div key={`pinBox${index}`} className={`${style.pinItem} ${item!==null ? style.full : ''}`}></div>)}
		      </div>
			      <div className={style.digitContainer}>
			      {[1,2,3,4,5,6,7,8,9].map((val) => <PinDigit digit={val} key={`pin${val}`} /> )}
			      <PinDigit digit="forgotten" />
			      <PinDigit digit="0" />
			      <PinDigit digit="clear"/>
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
  return {DispatchChangeCurrentSexInfo : bindActionCreators(datesSexAction.changeCurrentSexDate, dispatch)}
}

export default connect(matchStateToProps,matchDispatchToProps)(Pin);
