//- Created by hutber on 15/07/16.  */
import React from 'react';
import {Redirect} from 'react-router'

const requireLogin = (nextState, replace) => {
  if (!Boolean(localStorage.LOGGED_IN))
    <Redirect to="/signin"/>
};

const blockForLoggedInUsers = (nextState, replace) => {
  if (localStorage.LOGGED_IN)
    <Redirect to="/home"/>
};

export {requireLogin, blockForLoggedInUsers}
