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
    const storage = localStorage.LOGGED_IN || {};
    const loggedIn = this.props.user.loggedIn || JSON.parse(JSON.stringify(storage));
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
