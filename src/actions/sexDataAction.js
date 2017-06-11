// There are three possible states for our login
// process and we need actions for each of them
export const SET_DESIRE_DATA = 'SET_DESIRE_DATA';
export const SET_MASTURBATION_DATA = 'SET_MASTURBATION_DATA';
export const SET_SEX_DATA = 'SET_SEX_DATA';
export const ADD_DATES = 'ADD_DATES';
export const REMOVE_DATES = 'REMOVE_DATES';

export function pushToDesire(data) {
	return {
		type: SET_DESIRE_DATA,
		data
	}
}

export function pushToMasturbation(data) {
	return {
		type: SET_MASTURBATION_DATA,
		data
	}
}

export function pushToSex(data) {
	return {
		type: SET_SEX_DATA,
		data
	}
}

export function pushToDates(date) {
	return {
		type: ADD_DATES,
		date
	}
}


export function removeFromDates(date) {
	return {
		type: REMOVE_DATES,
		date
	}
}
