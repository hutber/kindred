//- Created by hutber on 15/07/16.  */
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'
import store from '../../../configureStore';

class RequireLogin extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const storage = localStorage.LOGGED_IN || 0;
    console.info(this.props.user.loggedIn, JSON.parse(JSON.stringify(storage)).LOGGED_IN);
    const loggedIn = Boolean(this.props.user.loggedIn || JSON.parse(JSON.stringify(storage)));
    console.info(loggedIn);
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
    user: state.user
  };
}

export default connect(mapStateToProps)(RequireLogin);
