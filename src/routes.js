//Core App things
import React, {Component} from 'react'
import {Route} from 'react-router';

//Core Pages
import Splash from './components/Splash/Splash';

//Root Pages
import Home from './components/Home';
import Settings from './components/Settings';

//User Pages
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Logout from './components/shared/Logout';

//Sex Selection Pages
import SexTypeSelection from './components/SexTypeSelection';
import Desire from './components/Desire';
import Masturbation from './containers/Masturbation';
import Sex from './containers/Sex';

//Save Summary
import SexSummary from './components/SexSummary/AllSummary';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Splash}/>

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />

        <Route path="/home" component={Home}  />
        <Route path="/settings" component={Settings} />

        <Route path="/sextypeselection" component={SexTypeSelection} />
        <Route path="/desire" component={Desire} />
        <Route path="/Masturbation" component={Masturbation} />
        <Route path="/Sex" component={Sex} />

        <Route path="/sexsummary" component={SexSummary} />
      </div>
    )
  }
};
