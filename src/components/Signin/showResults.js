import store from '../../configureStore';
import * as authAction from '../../actions/user/authActions';

export default (function showResults(values) {
  store.dispatch(authAction.submitLogin(values));
});
