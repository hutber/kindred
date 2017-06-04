// There are three possible states for our login
// process and we need actions for each of them
export const SET_DATE = 'SET_DATE';

export function changeCurrentSexInfo(date) {
	return {
		type: SET_DATE,
		date
	}
}
