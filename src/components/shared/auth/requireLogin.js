//- Created by hutber on 15/07/16.  */
import React from 'react';
import {Redirect} from 'react-router'
import Logo from '../../shared/logo/index';
import * as authStates from '../../shared/auth/requireLogin';

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
        <div>
          <h2>Redirect</h2>
        </div>
      );
    }
  }
}

export { RequireLogin, BlockForLoggedInUsers }
