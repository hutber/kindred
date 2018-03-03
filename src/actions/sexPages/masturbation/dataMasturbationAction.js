import Lang from '../../../lang/masturbation';
import handleErrors from '../../handleErrors';
import * as loading from '../../loadingAction';
import * as notification from '../../notificationActions';

export const PUSH_TO_MASTURBATION = 'PUSH_TO_MASTURBATION';

export function pushToMasturbation(data) {
  return {
    type: PUSH_TO_MASTURBATION,
    data
  };
}

export function saveMasturbation(options) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(loading.startLoading());

      fetch(options.url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: options.token
        },
        body: JSON.stringify(options.body)
      })
        .then(response => {
          if (!response.ok) {
            const errorMessage = Lang[response.status] ? Lang[response.status] : Lang[response.statusText];

            const errorOptions = {
              message: errorMessage,
              good: false,
              bad: true
            };
            dispatch(notification.showNotification(errorOptions));
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(items => {
          dispatch(loading.turnOffLoading());
          resolve(items);
        })
        .catch(response => {
          handleErrors(response);
          reject(response);
          dispatch(loading.turnOffLoading());
        });
    });
  };
}
