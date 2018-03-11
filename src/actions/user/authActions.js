//History
import { history } from '../../hydrate';

//Transforms
import * as transforms from '../../transforms';

//Actions
import signInLang from '../../lang/signIn';
import * as loading from '../loadingAction';
import * as notification from '../notificationActions';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGOUT = 'LOGOUT';

function receiveLogin(accessToken) {
  return {
    type: LOGGED_IN,
    token: accessToken.token,
    tokenTime: new Date()
  };
}

function handleErrors(response) {
  console.info(response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function doLogout() {
  return {
    type: LOGOUT
  };
}

export function refreshAuth(options) {
  return dispatch => {
    dispatch(loading.startLoading());

    return new Promise(resolve => {
      {
        fetch(options.url, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options.body)
        })
          .then(response => {
            if (!response.ok) {
              const errorMessage = signInLang[response.status] ? signInLang[response.status] : signInLang[response.statusText];

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
            dispatch(receiveLogin(items));
            resolve(true);
          })
          .catch(response => {
            handleErrors(response);
            dispatch(loading.turnOffLoading());
          });
      }
    });
  };
}

export function retrieveUsersData(options) {
  return dispatch => {
    console.info(options);
    dispatch(loading.startLoading());

    fetch(options.url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: options.token
      }
    })
      .then(response => {
        console.info(response);
        if (!response.ok) {
          const errorMessage = signInLang[response.status] ? signInLang[response.status] : signInLang[response.statusText];

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
        //Handle Desire
        console.info(transforms);
        if (items.userDesireEvents) transforms.desire(items.userDesireEvents);
        console.info(Object.keys(items));
        dispatch(loading.turnOffLoading());
      })
      .catch(response => {
        handleErrors(response);
        dispatch(loading.turnOffLoading());
      });
  };
}

export function submitLogin(options) {
  return dispatch => {
    dispatch(loading.startLoading());

    fetch(options.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options.body)
    })
      .then(response => {
        if (!response.ok) {
          const errorMessage = signInLang[response.status] ? signInLang[response.status] : signInLang[response.statusText];

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
        dispatch(
          retrieveUsersData({
            url: options.successObject.url,
            token: items.token
          })
        );
        dispatch(receiveLogin(items));
      })
      .catch(response => {
        handleErrors(response);
        dispatch(loading.turnOffLoading());
      });
  };
}
