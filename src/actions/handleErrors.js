import * as loading from '../actions/loadingAction';
import * as notification from '../actions/notificationActions';

export function handleErrors(response, dispatch) {
  if (!response.ok) {
    dispatch(loading.turnOffLoading());
    throw Error(response.statusText);
  }
  return response;
}

export function handleNetworkStatusError(response, lang, dispatch) {
  dispatch(loading.turnOffLoading());
  if (!response.ok) {
    const errorMessage = lang[response.status] ? lang[response.status] : lang[response.statusText];

    const errorOptions = {
      message: errorMessage,
      good: false,
      bad: true
    };
    dispatch(notification.showNotification(errorOptions));
    throw Error(response.statusText);
  }
  return response;
}
