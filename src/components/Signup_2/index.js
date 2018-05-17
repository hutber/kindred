import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import Logo from '../shared/logo';
import userStyles from '../shared/userPages/userPages.css';
import formStyles from '../shared/form/index.css';
import * as fontello from '../shared/font/fontello.css';

//Signed In Logic
import BlockForLoggedInUsers from '../shared/auth/BlockForLoggedInUsers';

//Actions
import * as userActions from '../../actions/user/authActions';
import * as notificationActions from '../../actions/notificationActions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: true,
      errorMessage: ''
    };

    this.registerUser = this.registerUser.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

    const passwordsMatch = this.checkPasswordsMatch();

    //check all forms are empty
    Array.from(this.refs.signUpForm).forEach(item => {
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
      if (!this.state.hasError) this.submitForm();
    }, 0);

    el.stopPropagation();
    el.preventDefault();
  }

  submitForm() {
    const apiUrl = `${this.props.api.endpoint}/${this.props.api.user.register.url}`;
    this.props.submitLogin({
      url: apiUrl,
      body: {
        username: this.refs.email.value,
        password: this.refs.password.value
      },
      successObject: {
        url: `${this.props.api.endpoint}/${this.props.api.utillist}`
      }
    });
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
            <p>Please enter some personal information fo ryour profile.</p>
          )}
          <form action="" ref="signUpForm" onSubmit={this.registerUser}>
            <div className={formStyles.select}>
              <select name="age">
                <option>Age</option>
                <option value="10-13">10-13</option>
              </select>
            </div>
            <div className={formStyles.select}>
              <select name="gender">
                <option>Gender</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </div>
            <div className={formStyles.select}>
              <select name="SexualPref">
                <option>Sexual preference</option>
                <option value="0">Straight</option>
                <option value="1">Gay</option>
              </select>
            </div>
            <button type="submit">Get Started!</button>
          </form>
        </div>
        <div className={userStyles.extraDetails}>
          <NavLink to="/signup">Don't have an account yet?</NavLink>
          <NavLink to="/skip" className={userStyles.extraDetailsRight}>
            Skip
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.user.auth,
    api: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    submitLogin: bindActionCreators(userActions.submitLogin, dispatch),
    notification: bindActionCreators(notificationActions.showNotification, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
