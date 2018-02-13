//Core App things
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Route} from 'react-router';

//Loading
import Loading from './components/shared/loading';

//Notfications
import Notification from './components/shared/notification';

//Core Pages
import Splash from './components/Splash/Splash';

//Root Pages
import Home from './components/Home';
import Settings from './components/Settings';

//User Pages
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Pin from './components/Pin';
import Logout from './components/shared/Logout';

//Sex Selection Pages
import SexTypeSelection from './components/SexTypeSelection';
import Desire from './components/Desire';
import Masturbation from './containers/Masturbation';
import Sex from './containers/Sex';

//Save Summary
import SexSummary from './components/SexSummary/AllSummary';

export default class Routes extends Component {
	componentDidMount(){
		const firstReload = window.localStorage.getItem('firstReload');
		if(firstReload){
			window.localStorage.removeItem('firstReload');
			this.props.history.push('/pin')
		}
	}

  render() {
    return (
      <div>
	      <Loading />
	      <Notification />
        <Route exact path="/" component={Splash}/>

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />
        <Route path="/pin" component={Pin} />
        <Route path="/confirmpin" component={Pin} />

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

function mapStateToProps(state){
	return {
		user: state.user
	};
}
