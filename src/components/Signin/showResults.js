import store from '../../configureStore';
import * as authAction from '../../actions/auth';

export default (function showResults(values) {
  store.dispatch(authAction.submitLogin(values));
});
