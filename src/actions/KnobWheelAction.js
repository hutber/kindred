// There are three possible states for our login
// process and we need actions for each of them
export const SET_DESIRE = 'SET_DESIRE';
export const SET_DATE = 'SET_DATE';

export function changeDesireLevel(desireLevel) {
	return {
		type: SET_DESIRE,
		desire: desireLevel
	}
}

export function changeDesireDate(date) {
	return {
		type: SET_DATE,
		date
	}
}
