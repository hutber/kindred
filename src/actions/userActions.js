// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_CHECK = 'LOGIN_CHECK'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_IN_FAILED = 'LOGGED_IN_FAILED'
export const UN_AUTHED = 'UN_AUTHED'
export const LOGOUT = 'LOGOUT'

export function requestLogin() {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false
	}
}

function receiveLogin(user) {
	return {
		type: LOGGED_IN,
		isFetching: false,
		isAuthenticated: true
	}
}

function loginError(message) {
	return {
		type: LOGGED_IN_FAILED,
		isFetching: false,
		isAuthenticated: false,
		message
	}
}

export function CheckLogin () {
	return {
		type: LOGIN_CHECK
	}
}

export function doLogout () {
  localStorage.setItem('LOGGED_IN', 0);
	return {
		type: LOGOUT
	}
}

export function submitLogin (creds) {
	if(creds.email !== "" && creds.pw !== ""){
		localStorage.setItem('LOGGED_IN', 1);
		return receiveLogin();
	}else{
		return loginError();
	}
	
}
