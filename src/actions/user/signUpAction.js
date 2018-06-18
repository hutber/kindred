export const CHANGE_FIELD_VAL = 'CHANGE_FIELD_VAL';
export const FINISH_STEP_1 = 'FINISH_STEP_1';
export const REGISTER_COMPLETE = 'REGISTER_COMPLETE';

import handleErrors from '../handleErrors';

//Translations
import registrationLang from '../../lang/registration';

//Actions
import * as loading from '../loadingAction';
import * as notification from '../notificationActions';

export function changeFieldVal(data) {
  return dispatch => {
    dispatch({
      type: CHANGE_FIELD_VAL,
      data
    });
  };
}

export function finishStep1(data) {
  return dispatch => {
    dispatch({
      type: FINISH_STEP_1,
      data
    });
  };
}

function successfullRegistration(email) {
  return {
    type: REGISTER_COMPLETE,
    successfulRegistration: true,
    email
  };
}

export function submitRegistration(options) {
  return dispatch => {
    dispatch(loading.startLoading());

    const sendData = {
      birthdate: '1985-10-10',
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
          dispatch(
            notification.showNotification({
              message: registrationLang['500'],
              good: false,
              bad: true
            })
          );
        } else {
          dispatch(successfullRegistration(options.body.emailaddress));
          dispatch(loading.turnOffLoading());
        }
      })
      .catch(response => {
        handleErrors(response);
        dispatch(loading.turnOffLoading());
      });
  };
}
