import { List, Map } from 'immutable';

import {
  LOGIN_CHECK,
  LOGIN_REQUEST,
  LOGGED_IN,
  LOGGED_IN_FAILED,
  LOGOUT
} from '../actions/userActions';

const initialState = {
	email: 'jamie@hutber.com',
	pw: 'test',
	loggedIn: JSON.parse(localStorage.LOGGED_IN) || 0,
	shouldRedirect: 0,
	errorMessage: null
};

export default function (state = initialState, action, data = {}) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state
				, loggedIn: 1
				, shouldRedirect: 1
			};
		case LOGGED_IN:
			return {
				...state
				, loggedIn: 1
				, shouldRedirect: 1
				, userData: data
			};
		case LOGGED_IN_FAILED:
			return {
        ...state
        , loggedIn: 0
        , shouldRedirect: 0
        , errorMessage: action.error.message
			};
		case LOGOUT:
			return {
				...state
				, loggedIn: 0
			};
	}
	return state
}
