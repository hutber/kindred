// There are three possible states for our login
// process and we need actions for each of them
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';

import * as notification from '../actions/notificationActions';

let loadingTimeout = null;
const loadingTimer = 5000;

export function turnOnLoading() {
  return {
    type: LOADING_ON,
    loading: true
  };
}

function turnOffLoadingAction() {
  return {
    type: LOADING_OFF,
    loading: false
  };
}

export function turnOffLoading() {
  return dispatch => {
    dispatch(notification.hideNotification());
    clearTimeout(loadingTimeout);
    dispatch(turnOffLoadingAction());
  };
}

export function startLoading() {
  return dispatch => {
    // clearTimeout(loadingTimeout);
    dispatch(turnOnLoading());

    loadingTimeout = setTimeout(() => {
      dispatch(turnOffLoading());
    }, loadingTimer);
  };
}
