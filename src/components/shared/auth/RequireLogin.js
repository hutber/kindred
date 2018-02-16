//- Created by hutber on 15/07/16.  */
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'

class RequireLogin extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const loggedIn = this.props.user.loggedIn;
    const needsPin = window.localStorage.getItem('firstReload') === "true" && loggedIn;

    if(needsPin){
	    return (<Redirect push to="/pin"/>);
    } else if (loggedIn) {
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
    user: state.user.auth
  };
}

export default connect(mapStateToProps)(RequireLogin);
