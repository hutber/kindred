// There are three possible states for our login
// process and we need actions for each of them
export const SET_TYPE = 'SET_TYPE';

export function currentType(sexType) {
	return {
		type: SET_TYPE,
		sexType
	}
}