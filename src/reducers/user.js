import { List, Map } from 'immutable';

const initialState = {
	email: 'jamie@hutber.com',
	pw: 'test',
	loggedIn: 0,
	shouldRedirect: 0,
	errorMessage: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return Object.assign({}, state, { loggedIn: 1, shouldRedirect: 1 });
		case 'LOGGED_IN':
			return Object.assign({}, state, { loggedIn: 1, shouldRedirect: 1 });
		case 'LOGOUT':
			return Object.assign({}, state, { loggedIn: 0 });
		case 'LOGIN_FAILED':
			return Object.assign({}, state, { loggedIn: 0, shouldRedirect: 0, errorMessage: action.error.message })
	}
	return state
}
