import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory(); //Use a history moudle
import reducers from './reducers/index';

const configureStore = function (history, preloadedState = {}) {
  // Build the middleware for intercepting and dispatching navigation actions
  const middlewareHistory = routerMiddleware(history);
  
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(createLogger(), middlewareHistory)
    )
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/index').default;
      
      store.replaceReducer(nextReducer);
    });
  }
  
  return store;
};

export default configureStore(history);
