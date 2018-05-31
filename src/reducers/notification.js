import { NOTIFICATION_ON, NOTIFICATION_OFF } from '../actions/notificationActions';

const initialState = {
  displayNotification: true,
  style: '',
  message: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_ON:
      return {
        ...state,
        style: action.style,
        message: action.message
      };
    case NOTIFICATION_OFF:
      return {
        ...state,
        message: ''
      };
  }
  return state;
}
