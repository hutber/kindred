import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router'

//pin actions
import * as pinAction from '../../actions/user/pinActions'

//styes
import style from './style.css';

class PinDigit extends React.Component {
  constructor (props){
    super(props);
    this.populatePin = this.populatePin.bind(this);
  }

	populatePin(){
  	const dig = Number.parseInt(this.props.digit);


  	//Enter Pin, after confirmation
		if(Number.isInteger(dig) && this.props.type === "safety") {
			this.props.addSafetyDigit(this.props.digit);
		}else if(this.props.digit === "clear" && this.props.type === "safety"){
			this.props.deleteSafetyDigit(this.props.digit);
		}
  	//Confirm Digit
		else if(Number.isInteger(dig) && this.props.type === "confirm") {
			this.props.addConfirmDigit(this.props.digit);
		}else if(this.props.digit === "clear" && this.props.type === "confirm"){
			this.props.deleteConfirmDigit(this.props.digit);
		}
		//Initial Digit
		else if(Number.isInteger(dig)) {
			this.props.addDigit(this.props.digit);
		}else if(this.props.digit === "clear"){
			this.props.removeDigit(this.props.digit);
		}
		//Forgotten Digit
		else {
			return (<Redirect push to="/pinForgotten"/>);
		}


	}

  render(){
    return (
      <div className={style.digit} onClick={this.populatePin}>
	      {this.props.digit}
      </div>
    );
  }
}

function matchStateToProps(state){
	return {
		pin: state.user.auth.pin
	}
}

function matchDispatchToProps(dispatch){
	return {
		addDigit : bindActionCreators(pinAction.addDigit, dispatch),
		removeDigit : bindActionCreators(pinAction.deleteDigit, dispatch),
		addConfirmDigit : bindActionCreators(pinAction.addConfirmDigit, dispatch),
		deleteConfirmDigit : bindActionCreators(pinAction.deleteConfirmDigit, dispatch),
		addSafetyDigit : bindActionCreators(pinAction.addSafetyDigit, dispatch),
		deleteSafetyDigit : bindActionCreators(pinAction.deleteSafetyDigit, dispatch),
	}
}

export default connect(matchStateToProps,matchDispatchToProps)(PinDigit);

