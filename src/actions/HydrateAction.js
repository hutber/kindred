// There are three possible states for our login
// process and we need actions for each of them
export const SET_HYDRATION = 'SET_HYDRATION';

export function hydrate(complete) {
	return {
		hydration: complete
	}
}
