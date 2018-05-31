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

    this.changeField = this.changeField.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.signupData.complete) {
      this.props.history.push('/signin');
    }
  }

  removeError(selector) {
    selector.classList.remove(formStyles.error);
  }

  addError(selector) {
    selector.classList.add(formStyles.error);
  }

  registerUser(el) {
    this.setState({
      hasError: false,
      errorMessage: ''
    });
    //check all forms are empty
    Array.from(this.refs.signUpForm2).forEach(item => {
      if (item.type === 'select-one' && item.value === '') {
        this.addError(item);
        this.setState({
          hasError: true
        });
      } else {
        this.removeError(item);
      }
    });

    setTimeout(() => {
      if (!this.state.hasError) this.submitForm();
    }, 0);

    el.stopPropagation();
    el.preventDefault();
  }

  submitForm() {
    const apiUrl = `${this.props.api.endpoint}${this.props.api.user.register.url}`;
    this.props.submitRegistration({
      url: apiUrl,
      body: this.props.signupData,
      successObject: {
        url: `${this.props.api.endpoint}/${this.props.api.utillist}`
      }
    });
  }

  changeField(el) {
    const name = el.target.name;
    const value = el.target.value;

    this.props.changeFieldVal({
      [name]: value
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
            <p>Please enter some personal information for your profile.</p>
          )}
          <form action="" ref="signUpForm2" onSubmit={this.registerUser}>
            <div className={formStyles.select}>
              <select name="age" onChange={this.changeField}>
                <option value="">Age</option>
                <option value="13-17">13-17</option>
                <option value="18-23">18-23</option>
                <option value="24-27">24-27</option>
                <option value="28-32">28-32</option>
                <option value="33-36">33-36</option>
                <option value="37-42">37-42</option>
                <option value="43-51">43-51</option>
                <option value="52-60">52-60</option>
                <option value="70-80">70-80</option>
                <option value="81">81+</option>
              </select>
            </div>
            <div className={formStyles.select}>
              <select name="sex" onChange={this.changeField}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className={formStyles.select}>
              <select name="sexualPreference" onChange={this.changeField}>
                <option value="">Sexual preference</option>
                <option value="Straight">Straight</option>
                <option value="Gay">Gay</option>
                <option value="Bi">Bi</option>
              </select>
            </div>
            <button type="submit" onClick={this.registerUser}>
              Get Started!
            </button>
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
    signupData: state.user.signup,
    api: state.api.live
  };
}

function matchDispatchToProps(dispatch) {
  return {
    submitRegistration: bindActionCreators(signUpAction.submitRegistration, dispatch),
    changeFieldVal: bindActionCreators(signUpAction.changeFieldVal, dispatch),
    notification: bindActionCreators(notificationActions.showNotification, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
