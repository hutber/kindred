// There are three possible states for our login
// process and we need actions for each of them
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';

export function turnOnLoading () {
	return {
		type: LOADING_ON,
		loading: true
	}
}

export function turnOffLoading () {
	return {
		type: LOADING_OFF,
		loading: false
	}
}
