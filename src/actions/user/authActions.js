//Moment
import moment from 'moment';
import handleErrors from '../handleErrors';

//Transforms
import transforms from '../../transforms';

//Translations
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
            if (dispatchToUse) {
              transformData.forEach(data => {
                const dbDate = data.dateDate;
                const validDate = moment(`${dbDate.year}-${dbDate.monthValue}-${dbDate.dayOfMonth}`).format();
                data.date = validDate;
                delete data.dateDate;
                delete data.currentDate;

                dispatch(datesAction.pushToDates(validDate));
                dispatch(dispatchToUse(data));
              });
            }
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
