import signInLang from '../lang/signIn';
import * as loading from './loadingAction';
import * as notification from './notificationActions';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGOUT = 'LOGOUT';


function receiveLogin(accessToken) {
	return {
		type: LOGGED_IN,
		token: accessToken.token
	}
}

export function doLogout() {
	return {
		type: LOGOUT
	}
}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}


export function submitLogin(options) {
	return (dispatch) => {
		dispatch(loading.startLoading());
		const headers = new Headers({
			"Content-Type": "application/json"
		});


		fetch(options.url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(options.body)
		})
			.then((response) => {
				if (!response.ok) {

					const errorMessage =  signInLang[response.status] ? signInLang[response.status] : signInLang[response.statusText];

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
			.then((response) => response.json())
			.then((items) => {
				dispatch(loading.turnOffLoading());
				dispatch(receiveLogin(items));
			})
			.catch(() => {
				dispatch(loading.turnOffLoading())
			});
	};
}
