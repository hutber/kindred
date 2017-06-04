import store from '../../configureStore';
import * as authAction from '../../actions/userActions';

export default (function showResults(values) {
  store.dispatch(authAction.submitLogin(values));
});
