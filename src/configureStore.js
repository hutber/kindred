import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from './reducers';

const configureStore = function (history, preloadedState = {}) {
  // Build the middleware for intercepting and dispatching navigation actions
  const middlewareHistory = routerMiddleware(history);
  
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(createLogger(), middlewareHistory),
      // autoRehydrate()
    )
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;

      store.replaceReducer(nextReducer);
    });
  }
  // persistStore(store);
  return store;
};
export default configureStore(history);
