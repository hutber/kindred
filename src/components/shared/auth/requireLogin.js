//- Created by hutber on 15/07/16.  */
import React from 'react';
import {Redirect} from 'react-router'

class requireLogin extends React.Component {
  constructor(){
    super();
    this.LocalRedirect = null;
  }

  componentWillMount (){
    console.info(this.LocalRedirect);
    if (!Boolean(localStorage.LOGGED_IN)) {
      this.LocalRedirect = <Redirect to="/signin"/>
    }
  }

  render(){

    return (
      <div>
        <this.LocalRedirect />
      </div>
    )
  }
}

const blockForLoggedInUsers = (nextState, replace) => {
  if (localStorage.LOGGED_IN)
    <Redirect to="/home"/>
};

export {requireLogin, blockForLoggedInUsers}
