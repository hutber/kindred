// There are three possible states for our login
// process and we need actions for each of them
export const NOTIFICATION_ON = 'NOTIFICATION_ON';
export const NOTIFICATION_OFF = 'NOTIFICATION_OFF';

let Timeout = null;
const Timer = 52000;

export function hideNotification() {
  return {
    type: NOTIFICATION_OFF,
    message: ''
  };
}

export function displayNotification(message, good = true) {
  clearTimeout(Timeout);
  const style = good ? 'good' : 'bad';
  return {
    type: NOTIFICATION_ON,
    message,
    style
  };
}

export function showNotification(options) {
  return dispatch => {
    dispatch(displayNotification(options.message, options.good));

    Timeout = setTimeout(() => {
      dispatch(hideNotification());
    }, Timer);
  };
}
