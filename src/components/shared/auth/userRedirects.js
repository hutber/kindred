//- Created by hutber on 15/07/16.  */
import React from 'react';
import {Redirect} from 'react-router'
import store from '../../../configureStore';

class RequireLogin extends React.Component {
  render(){
    const loggedIn = store.getState().user.loggedIn || JSON.parse(localStorage.LOGGED_IN);
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
class BlockForLoggedInUsers extends React.Component {
  render(){
    const loggedIn = store.getState().user.loggedIn || JSON.parse(localStorage.LOGGED_IN);
    if (loggedIn) {
      return (
        <Redirect push to="/home"/>
      )
    }else{
      return (
        <div></div>
      );
    }
  }
}

export { RequireLogin, BlockForLoggedInUsers }
