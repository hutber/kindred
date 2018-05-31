import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

//Translations
import registrationLang from '../../lang/registration';

//Actions
import * as userActions from '../../actions/user/authActions';
import * as notificationActions from '../../actions/notificationActions';

//Signed In Logic
import BlockForLoggedInUsers from '../shared/auth/BlockForLoggedInUsers';

//Components
import Logo from '../shared/logo';

//Styles
import formStyles from '../shared/form/index.css';
import userStyles from '../shared/userPages/userPages.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: true,
      errorMessage: ''
    };

    this.signInUser = this.signInUser.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    if (this.props.signupDetails.complete) {
      this.props.notification({
        message: registrationLang['201']
      });
    }
  }

  removeError(selector) {
    selector.classList.remove(formStyles.error);
  }

  addError(selector) {
    selector.classList.add(formStyles.error);
  }

  signInUser(el) {
    this.setState({
      hasError: false,
      errorMessage: ''
    });
    const emailValid = /\S+@\S+\.\S+/;
    const errorArray = ['text', 'password', 'email'];

    //check all forms are empty
    Array.from(this.refs.signInForm).forEach(item => {
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
      }
    });

    setTimeout(() => {
      //little trick to put at end of JS queue
      if (!this.state.hasError) this.submitForm();
    }, 0);

    el.stopPropagation();
    el.preventDefault();
  }

  submitForm() {
    const loginUrl = `${this.props.loginUrl.endpoint}/${this.props.loginUrl.login}`;
    this.props.submitLogin({
      url: loginUrl,
      body: {
        username: this.refs.email.value,
        password: this.refs.pw.value
      },
      successObject: {
        url: `${this.props.loginUrl.endpoint}/${this.props.loginUrl.utillist}`
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
            <p>Please sign in to your account</p>
          )}
          <div>
            <form role="form" ref="signInForm" onSubmit={this.signInUser}>
              <input
                type="email"
                name="email"
                ref="email"
                placeholder="Enter email address"
                defaultValue={this.props.signupDetails.emailaddress}
              />
              <input type="password" name="pw" ref="pw" placeholder="Password" />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
        <div className={userStyles.extraDetails}>
          <NavLink to="/signup">Sign on up</NavLink>
          <NavLink to="/forgotten" className={userStyles.extraDetailsRight}>
            Forgotten Details
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.auth,
    loginUrl: state.api.live,
    signupDetails: state.user.signup
  };
}

function matchDispatchToProps(dispatch) {
  return {
    submitLogin: bindActionCreators(userActions.submitLogin, dispatch),
    notification: bindActionCreators(notificationActions.showNotification, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);
