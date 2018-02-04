import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom'

//Actions
import * as userActions from '../../actions/userActions'

//Signed In Logic
import BlockForLoggedInUsers from '../shared/auth/BlockForLoggedInUsers'

//Components
import Logo from '../shared/logo';

//Styles
import formStyles from '../shared/form/index.css';
import userStyles from '../shared/userPages/userPages.css';

class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			hasError: true,
			errorMessage: ''
		};

		this.signInUser = this.signInUser.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	removeError(selector){
		selector.classList.remove(formStyles.error);
	}

	addError(selector){
		selector.classList.add(formStyles.error);
	}

	signInUser(el) {
		this.setState({
			hasError: false,
			errorMessage: ''
		});
		const emailValid = /\S+@\S+\.\S+/;
		const errorArray = [
			'text',
			'password',
			'email',
		];

		//check all forms are empty
		Array.from(this.refs.signInForm).forEach(item => {
			if(errorArray.includes(item.type) && item.value === "") {
				this.addError(item);
				this.setState({
					hasError: true,
				});
			} else {
				this.removeError(item);
			}

			if(item.type === 'email' && !emailValid.test(item.value)){
				this.setState({
					hasError: true,
					errorMessage: 'Please enter a valid Email Address'
				});
			}
		});

		setTimeout(() => { //little trick to put at end of JS queue
			if(!this.state.hasError)
				this.submitForm()
		},0);

		el.stopPropagation();
		el.preventDefault();
	}

	submitForm(){
		const loginUrl = `${this.props.loginUrl.endpoint}/${this.props.loginUrl.login}`;
		this.props.submitLogin(loginUrl)
	}

  render(){
    return (
      <div className={userStyles.home}>
	      <div className={userStyles.container}>
		      <BlockForLoggedInUsers />
		      <Logo />
		      <h1>Welcome to <br /> Kindred</h1>
		      {this.state.errorMessage !== "" ? (
			      <p className={formStyles.error}>{this.state.errorMessage}</p>
		      ) : (
			      <p>Please sign in to your account</p>
		      )}
		      <div>
			      <form role="form" ref="signInForm"  onSubmit={this.signInUser}>
				      <input type="text" name="email" value="jamie@hutber.com" placeholder="Enter email address"/>
				      <input type="password" name="pw" placeholder="Password" value="test"/>
				      <button type="submit">Sign In</button>
			      </form>
		      </div>
	      </div>
	      <div className={userStyles.extraDetails}>
		      <NavLink to="/signup">Don't have an account yet?</NavLink>
		      <NavLink to="/skip" className={userStyles.extraDetailsRight}>Skip</NavLink>
	      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	user: state.user,
	  loginUrl: state.api.live
  };
}

function matchDispatchToProps(dispatch){
	return {
		submitLogin: bindActionCreators(userActions.submitLogin, dispatch),
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);


