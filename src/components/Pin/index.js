import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import PinInput from 'react-pin-input'

//Auth
import RequireLogin from '../shared/auth/RequireLogin'
import * as datesSexAction from '../../actions/datesSexAction'

//Components
import Logo from '../shared/logo';

//diget
import Digit from './digit';

//Styles
import main from '../shared/main.css';
import style from './style.css';

class Pin extends React.Component {
  constructor (props){
    super(props);

    this.state = {};
  }

  componentDidMount(){
  	console.info();
  }

  render(){
    return (
      <div className={main.middle}>
	      <div className={main.container}>
		      <RequireLogin />
		      <Logo />
		      <h1>Security check</h1>
		      <p className={style.p}>We'll keep all your data secure and anonymous. Please chose a 4 digit pin code for extra protection</p>
		      <div className={style.pinContainer}>
			      <div className={style.pinItem}></div>
			      <div className={style.pinItem}></div>
			      <div className={style.pinItem}></div>
			      <div className={style.pinItem}></div>
		      </div>
			      <div className={style.digitContainer}>
			      {[1,2,3,4,5,6,7,8,9].map((val) => <Digit digit={val} key={`pin${val}`} onClick={this.populatePin}/> )}
			      <Digit digit="forgotten" />
			      <Digit digit="0" />
			      <Digit digit="clear"/>
			      </div>
	      </div>
      </div>
    );
  }
}

function matchStateToProps(state){
  return {
    dates: state.dates.dates
  }
}

function matchDispatchToProps(dispatch){
  return {DispatchChangeCurrentSexInfo : bindActionCreators(datesSexAction.changeCurrentSexDate, dispatch)}
}

export default connect(matchStateToProps,matchDispatchToProps)(Pin);
