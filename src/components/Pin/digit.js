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
		if(Number.isInteger(dig)) {
			this.props.addDigit(this.props.digit);
		}else if(this.props.digit === "clear"){
			this.props.removeDigit(this.props.digit);
		} else {
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
	}
}

export default connect(matchStateToProps,matchDispatchToProps)(PinDigit);

