import {
	NOTIFICATION_ON,
	NOTIFICATION_OFF,
} from '../actions/notificationActions';

const initialState = {
	displayNotification: true,
	good: false,
	bad: false,
	message: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case NOTIFICATION_ON:
			return {
				...state,
				good: action.good,
				bad: action.bad,
				message: action.message
			};
			case NOTIFICATION_OFF:
			return {
				...state,
				good: false,
				bad: false,
				message: action.message
			};
	}
	return state
}
