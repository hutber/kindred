import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import Logo from '../shared/logo';
import userStyles from '../shared/userPages/userPages.css';
import formStyles from '../shared/form/index.css';

//Signed In Logic
import BlockForLoggedInUsers from '../shared/auth/BlockForLoggedInUsers';

//Actions
import * as signUpAction from '../../actions/user/signUpAction';
import * as notificationActions from '../../actions/notificationActions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: true,
      errorMessage: ''
    };

    this.registerUser = this.registerUser.bind(this);
  }

  removeError(selector) {
    selector.classList.remove(formStyles.error);
  }

  addError(selector) {
    selector.classList.add(formStyles.error);
  }

  checkPasswordsMatch() {
    const passwords = Array.from(this.refs.signUpForm).filter(item => item.name.includes('password'));
    return passwords[0].value === passwords[1].value;
  }

  registerUser(el) {
    this.setState({
      hasError: false,
      errorMessage: ''
    });
    const emailValid = /\S+@\S+\.\S+/;
    const errorArray = ['text', 'password', 'email'];
    const signUpFormInputs = Array.from(this.refs.signUpForm);

    //Form Inputs
    const email = signUpFormInputs[0].value;
    const pw1 = signUpFormInputs[1].value;
    const pw2 = signUpFormInputs[2].value;

    const passwordsMatch = this.checkPasswordsMatch();

    //check all forms are empty
    signUpFormInputs.forEach(item => {
      if (errorArray.includes(item.type) && item.value === '') {
        this.addError(item);
        this.setState({
          hasError: true
        });
      } else {
        this.removeError(item);
      }

      if (item.type === 'email' && !emailValid.test(item.value)) {
        this.setState({
          hasError: true,
          errorMessage: 'Please enter a valid Email Address'
        });
      } else if (!passwordsMatch) {
        this.addError(this.refs.signUpForm[1]);
        this.addError(this.refs.signUpForm[2]);
        this.setState({
          hasError: true,
          errorMessage: 'Please make sure your passwords match'
        });
      }
    });

    setTimeout(() => {
      if (!this.state.hasError) {
        this.props.finishStep1({
          emailaddress: email,
          pw1,
          pw2
        });
        this.props.history.push('signup_2');
      }
    }, 0);

    el.stopPropagation();
    el.preventDefault();
  }

  render() {
    return (
      <div className={userStyles.home}>
        <div className={userStyles.container}>
          <BlockForLoggedInUsers />
          <Logo />
          <h1>
            Welcome to <br /> Kindred
          </h1>
          {this.state.errorMessage !== '' ? (
            <p className={formStyles.error}>{this.state.errorMessage}</p>
          ) : (
            <p>Please sign up to be able to save your data</p>
          )}
          <form action="" ref="signUpForm" onSubmit={this.registerUser}>
            <input type="email" name="emailaddress" placeholder="Enter email address" defaultValue={this.props.signup.emailaddress} />
            <input type="password" name="password" placeholder="Password" defaultValue={this.props.signup.pw1} />
            <input type="password" name="password_confirm" placeholder="Re-enter Password" defaultValue={this.props.signup.pw2} />
            <button type="submit">Save</button>
          </form>
        </div>
        <div className={userStyles.extraDetails}>
          <NavLink to="/signin">Back to login</NavLink>
          <NavLink to="/forgotten" className={userStyles.extraDetailsRight}>
            Forgotten Details?
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.user.auth,
    api: state.api.live,
    signup: state.user.signup
  };
}

function matchDispatchToProps(dispatch) {
  return {
    finishStep1: bindActionCreators(signUpAction.finishStep1, dispatch),
    notification: bindActionCreators(notificationActions.showNotification, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
