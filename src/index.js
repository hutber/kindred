import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import nprogress from 'nprogress';
import store from './configureStore';
import Routes from './routes';
import './components/shared/main.css';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory({
  hashType: 'slash'
});

//Remove on screen tap delay
injectTapEventPlugin({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return true;
  }
});

window.onerror = function(msg, url, linenumber) {
  alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
  return true;
}

//Add progress bar
nprogress.configure({ minimum: 0.15, showSpinner: false, speed: 500 });

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

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
