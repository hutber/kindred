import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import nprogress from 'nprogress';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory(); //Use a history moudle
import store from './configureStore';
import Routes from './routes';
import './components/shared/main.css';

//Remove on screen tap delay
injectTapEventPlugin();

//Add progress bar
nprogress.configure({ minimum: 0.15, showSpinner: false, speed: 500 });


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// const store = configureStore(history);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

// const rootEl = document.getElementById('app');
// const render = Component =>
//   ReactDOM.render(
    {/*<Provider store={store}>*/}
      {/*<ConnectedRouter history={history}>*/}
        {/*<Routes/>*/}
      // </ConnectedRouter>
    // </Provider>,
    // rootEl
  // );
//
// render(App);
// if (module.hot) module.hot.accept('./App', () => render(App));
