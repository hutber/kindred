//- Created by hutber on 15/07/16.  */
import React from 'react';
import {Redirect} from 'react-router'
import Logo from '../../shared/logo/index';

class RequireLogin extends React.Component {
  render(){
    if (localStorage.LOGGED_IN) {
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
    if (!localStorage.LOGGED_IN) {
      return (
        <div></div>
      )
    }else{
      return (
        <Redirect push to="/home"/>
      );
    }
  }
}

export { RequireLogin, BlockForLoggedInUsers }
