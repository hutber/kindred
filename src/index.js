import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory' //history api
import injectTapEventPlugin from 'react-tap-event-plugin';
import nprogress from 'nprogress';
const history = createHistory(); //Use a history moudle
import configureStore from './store/configureStore';
import Routes from './routes';

//Remove on screen tap delay
injectTapEventPlugin();

//Add progress bar
nprogress.configure({ minimum: 0.15, showSpinner: false, speed: 500 });


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
