import desireLang from '../../../lang/desire';
import handleErrors from '../../handleErrors';
import * as loading from '../../loadingAction';
import * as notification from '../../notificationActions';

export const SET_DESIRE_DATA = 'SET_DESIRE_DATA';
export const SET_DESIRE = 'SET_DESIRE';
export const SET_DATE = 'SET_DATE';

export function changeDesireLevel(desireLevel) {
  return {
    type: SET_DESIRE,
    desire: desireLevel
  };
}

export function changeDesireDate(date) {
  return {
    type: SET_DATE,
    date
  };
}

export function pushToDesire(data) {
  return {
    type: SET_DESIRE_DATA,
    data
  };
}

export function saveDesire(options) {
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
            const errorMessage = desireLang[response.status] ? desireLang[response.status] : desireLang[response.statusText];

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
