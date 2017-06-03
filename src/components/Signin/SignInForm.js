import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <form role="form" onSubmit={handleSubmit}>
          <Field type="text" component="input" name="email" placeholder="Enter email address"/>
          <Field type="password" component="input" name="pw" placeholder="Password"/>
          <button type="submit" disabled={submitting}>Sign In</button>
        </form>
      </div>
    );
  }
}

SignInForm = reduxForm({
  form: 'signInForm'
})(SignInForm);

function mapStateToProps(state) {
  return { initialValues: state.user };
}

export default SignInForm = connect(mapStateToProps)(SignInForm);
