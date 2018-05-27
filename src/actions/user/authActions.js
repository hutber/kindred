//Transforms
import transforms from '../../transforms';

//Translations
import registrationLang from '../../lang/registration';
import signInLang from '../../lang/signIn';

//Actions
import * as loading from '../loadingAction';
import * as notification from '../notificationActions';
import * as datesAction from '../../actions/datesSexAction';

//Sex Actions
import * as desireAction from '../sexPages/desire/desireAction';
import * as dataMasturbationAction from '../sexPages/masturbation/dataMasturbationAction';
import * as dataSexAction from '../sexPages/sex/dataSexAction';

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
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}

export function doLogout() {
  return dispatch => {
    localStorage.clear();
    dispatch({
      type: LOGOUT
    });
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
    dispatch(loading.startLoading());

    fetch(options.url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: options.token
      }
    })
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            dispatch(doLogout());
            dispatch(loading.turnOffLoading());
            return;
          }
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
        //Grab all user data and populate store
        Object.keys(items).forEach(dataType => {
          if (transforms[dataType]) {
            const transformData = transforms[dataType](items[dataType]);
            let dispatchToUse;
            if (dataType.includes('Desire')) {
              dispatchToUse = desireAction.pushToDesire;
            } else if (dataType.includes('Masturbation')) {
              dispatchToUse = dataMasturbationAction.pushToMasturbation;
            } else if (dataType.includes('Sex')) {
              dispatchToUse = dataSexAction.pushToSex;
            }
            transformData.forEach(data => {
              dispatch(datesAction.pushToDates(data.currentDate));
              dispatch(dispatchToUse(data));
            });
          }
        });

        dispatch(receiveLogin(options.items));
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
            token: items.token,
            items
          })
        );
      })
      .catch(response => {
        handleErrors(response);
        dispatch(loading.turnOffLoading());
      });
  };
}

export function submitRegistration(options) {
  return dispatch => {
    dispatch(loading.startLoading());

    const sendData = {
      birthdate: '10-11-1985',
      emailaddress: options.body.emailaddress,
      location: 'string',
      name: 'string',
      password: options.body.pw1,
      sex: options.body.sex,
      sexualPreference: options.body.sexualPreference
    };

    fetch(options.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData)
    })
      .then(response => {
        if (!response.ok) {
          const errorMessage = registrationLang[response.status]
            ? registrationLang[response.status]
            : registrationLang[response.statusText];

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
        if (items.success === false) {
          const errorOptions = {
            message: registrationLang['500'],
            good: false,
            bad: true
          };
          dispatch(notification.showNotification(errorOptions));
        } else {
          const errorOptions = {
            message: registrationLang['201'],
            good: true,
            bad: false
          };
          dispatch(notification.showNotification(errorOptions));
          this.props.history.push('/signin');
        }
      })
      .catch(response => {
        handleErrors(response);
        dispatch(loading.turnOffLoading());
      });
  };
}
