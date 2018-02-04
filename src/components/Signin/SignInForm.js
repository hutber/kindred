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
