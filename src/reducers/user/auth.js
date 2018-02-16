import {
  LOGGED_IN,
  LOGOUT
} from '../../actions/user/authActions';

const initialState = {
	loggedIn: 0,
	token: null,
};

export default function (state = initialState, action, data = {}) {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state
				, loggedIn: 1
				, token: action.token
			};
		case LOGOUT:
			return {
				...state
				, loggedIn: 0
				, token: null
			};
	}
	return state
}
