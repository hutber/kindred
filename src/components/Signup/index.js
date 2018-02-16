import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'

import BlockForLoggedInUsers from '../shared/auth/BlockForLoggedInUsers'
import Logo from '../shared/logo';
import userStyles from '../shared/userPages/userPages.css';
import formStyles from '../shared/form/index.css';

class SignUp extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			hasError: true,
			errorMessage: ''
		};

		this.registerUser = this.registerUser.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	removeError(selector){
		selector.classList.remove(formStyles.error);
	}

	addError(selector){
		selector.classList.add(formStyles.error);
	}

	checkPasswordsMatch(){
		const passwords = Array.from(this.refs.signUpForm).filter(item => item.name.includes('password'));
		return passwords[0].value === passwords[1].value;
	}

	registerUser(el) {
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

		const passwordsMatch = this.checkPasswordsMatch();

		//check all forms are empty
		Array.from(this.refs.signUpForm).forEach(item => {
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
			else if (!passwordsMatch){
				this.addError(this.refs.signUpForm[1]);
				this.addError(this.refs.signUpForm[2]);
				this.setState({
					hasError: true,
					errorMessage: 'Please make sure your passwords match'
				});
			}
		});

		setTimeout(() => {
			if(!this.state.hasError)
			this.submitForm()
		},0);

		el.stopPropagation();
		el.preventDefault();
	}

	submitForm(){
		console.info('send form');
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
			      <p>Please sign up to be able to save your data</p>
		      )}
		      <form action="" ref="signUpForm" onSubmit={this.registerUser}>
			      <input type="email" placeholder="Enter email address" value="jamie@hutber.com"/>
			      <input type="password" name="password" placeholder="Password"/>
			      <input type="password" name="password_confirm" placeholder="Re-enter Password"/>
			      <button type="submit">Save</button>
		      </form>
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
	return { initialValues: state.user.auth };
}

export default connect(mapStateToProps)(SignUp);
