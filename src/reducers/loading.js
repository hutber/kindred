import {
	LOADING_ON,
	LOADING_OFF,
} from '../actions/loadingAction';

const initialState = {
	displayLoading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOADING_ON:
			return {
				...state
				, displayLoading: action.loading
			};
			case LOADING_OFF:
			return {
				...state
				, displayLoading: action.loading
			};
	}
	return state
}
