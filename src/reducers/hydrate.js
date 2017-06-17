import {
  SET_HYDRATION
}
from '../actions/HydrateAction';

const initialState = {
  hydration: false
};

function setHydrate (state = initialState, action) {
	switch (action.type) {
		case SET_HYDRATION:
			return {
				...state,
        hydration:action.hydration
			}
	}
	return state
}
 
export default setHydrate;
