//Core App things
import React, {Component} from 'react'
import {Route} from 'react-router';
import {blockForLoggedInUsers, requireLogin} from './components/shared/auth/requireLogin';

import Splash from './components/Splash';
import Home from './components/Home';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Splash}/>
        <Route path="/home" component={Home} beforeEnter={requireLogin} />
      </div>
    )
  }
};
