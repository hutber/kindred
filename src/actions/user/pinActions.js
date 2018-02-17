import * as notification from '../user/pinActions';

export const ADD_DIGIT = 'ADD_DIGIT';
export const ADD_CONFIRM_DIGIT = 'ADD_CONFIRM_DIGIT';
export const ADD_SATEFY_DIGIT = 'ADD_SATEFY_DIGIT';
export const DELETE_DIGIT = 'DELETE_DIGIT';
export const DELETE_CONFIRM_DIGIT = 'DELETE_CONFIRM_DIGIT';
export const DELETE_SATEFY_DIGIT = 'DELETE_SATEFY_DIGIT';

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

export function addConfirmDigit(data) {
	return {
		type: ADD_CONFIRM_DIGIT,
		digit: data
	}
}

export function deleteConfirmDigit() {
	return {
		type: DELETE_CONFIRM_DIGIT
	}
}


export function addSafetyDigit(data) {
	return {
		type: ADD_SATEFY_DIGIT,
		digit: data
	}
}

export function deleteSafetyDigit() {
	return {
		type: DELETE_SATEFY_DIGIT
	}
}
