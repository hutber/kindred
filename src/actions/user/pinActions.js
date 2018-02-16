import * as notification from '../user/pinActions';

export const ADD_DIGIT = 'ADD_DIGIT';
export const ADD_CONFIRM_DIGIT = 'ADD_CONFIRM_DIGIT';
export const DELETE_DIGIT = 'DELETE_DIGIT';
export const DELETE_CONFIRM_DIGIT = 'DELETE_CONFIRM_DIGIT';

export function addDigit(data) {
	return {
		type: ADD_DIGIT,
		digit: data
	}
}

export function deleteDigit() {
	return {
		type: DELETE_DIGIT
	}
}

function handleErrors(response) {
	if (!response.ok) {
		console.error(response);
		throw Error(response.statusText);
	}
	return response;
}


export function submitLogin(options) {
	return (dispatch) => {
		dispatch(loading.startLoading());

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
			.catch((response) => {
				handleErrors(response);
				dispatch(loading.turnOffLoading())
			});
	};
}
