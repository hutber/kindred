import {
  SET_TAG_SEARCH_TERM,
  SET_TAG_SELECTION,
} from '../../actions/tagsAction';

const initialState = {
  quality: 3,
  quantity: 0
};

function masturbationTags (state = initialState, action) {
	switch (action.type) {
		case SET_TAG_SEARCH_TERM:
			return {...state, quantity: action.quantity };
		case SET_TAG_SELECTION:
			return {...state, quality: action.quality };
	}
	return state
}
 
export default masturbationTags;
