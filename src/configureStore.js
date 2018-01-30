import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-persist'
import ReduxThunk from 'redux-thunk' // no changes here 😀
import reducers from './reducers';

const configureStore = function (history, preloadedState = {}) {
  // Build the middleware for intercepting and dispatching navigation actions
  const middlewareHistory = routerMiddleware(history);
  
  const store = createStore(
    reducers,
    preloadedState,
	  composeWithDevTools(
      applyMiddleware(
	      ReduxThunk,
      	createLogger(),
	      middlewareHistory
      ),
      autoRehydrate()
    )
  );

  window.store = store;
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;

      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
export default configureStore(history);
