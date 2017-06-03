//Core App things
import React, {Component} from 'react'
import {Route} from 'react-router';

import Splash from './components/Splash';
import SignIn from './components/Signin';
import Home from './components/Home';
import Settings from './components/Settings';
import Logout from './components/shared/Logout';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Splash}/>
        <Route path="/home" component={Home}  />
        <Route path="/signin" component={SignIn} />
        <Route path="/logout" component={Logout} />
        <Route path="/settings" component={Settings} />
      </div>
    )
  }
};
