//- Created by hutber on 15/07/16.  */
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'

class RequireLogin extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

  	//Pin Number logic redirects
    const loggedIn = this.props.user.loggedIn;
    const needsPin = window.localStorage.getItem('firstReload') === "true" && loggedIn;
    const safetyPin = this.props.pin.pinsMatch && loggedIn && needsPin;

    if(safetyPin){
	    return (<Redirect push to="/safetypin"/>);
    } else if(needsPin && !this.props.pin.pinFilledIn && this.props.pinPage !== "/pinconfirm"){
	    return (<Redirect push to="/pin"/>);
    } else
    	if (loggedIn) {
      return (
        <div></div>
      )
    }else{
      return (
        <Redirect push to="/signin"/>
      );
    }
  }
}

function mapStateToProps(state){
  return {
    user: state.user.auth,
    pin: state.user.pin,
    pinPage: state.router.location.pathname
  };
}

export default connect(mapStateToProps)(RequireLogin);
