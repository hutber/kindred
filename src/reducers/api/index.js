import live from './live'
const initialState = {
	live: live()
};

export default function (state = initialState, action, data = {}) {
	return state
}
