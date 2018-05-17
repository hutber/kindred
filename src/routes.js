//Core App things
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

//Loading
import Loading from './components/shared/loading';

//Notfications
import Notification from './components/shared/notification';

//Core Pages
import Splash from './components/Splash/Splash';

//Root Pages
import Home from './components/Home';
import Settings from './components/Settings';
import More from './containers/More';

//User Pages
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import SignUp_2 from './components/Signup_2';
import Logout from './components/shared/Logout';

//Data
import Data from './containers/Data';

//Pin
import Pin from './components/Pin';
import Confirm from './components/Pin/Confirm';
import Safetypin from './components/Pin/Safetypin';

//Sex Selection Pages
import SexTypeSelection from './components/SexTypeSelection';
import Desire from './containers/Desire';
import Masturbation from './containers/Masturbation';
import Sex from './containers/Sex';

//Save Summary
import SexSummary from './components/SexSummary/AllSummary';

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Loading />
          <Notification />
          <Route exact path="/" component={Splash} />

          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signup_2" component={SignUp_2} />
          <Route path="/logout" component={Logout} />

          <Route path="/pin" component={Pin} />
          <Route path="/pinconfirm" component={Confirm} />
          <Route path="/safetypin" component={Safetypin} />

          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/more" component={More} />

          <Route path="/sextypeselection" component={SexTypeSelection} />
          <Route path="/desire" component={Desire} />
          <Route path="/Masturbation" component={Masturbation} />
          <Route path="/Sex" component={Sex} />

          <Route path="/sexsummary" component={SexSummary} />

          <Route path="/data" component={Data} />
        </div>
      </HashRouter>
    );
  }
}
