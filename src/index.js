import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import nprogress from 'nprogress';
import AppProvider from './hydrate';
import './components/shared/main.css';

//Remove on screen tap delay
injectTapEventPlugin({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return true;
  }
});

// window.onerror = function(msg, url, linenumber) {
//   alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
//   return true;
// }

//Add progress bar
nprogress.configure({ minimum: 0.15, showSpinner: false, speed: 500 });

ReactDOM.render(
  <AppContainer>
    <AppProvider />
  </AppContainer>,
  document.getElementById('app')
);
