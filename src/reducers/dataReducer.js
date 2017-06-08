import Moment from 'moment';
import {
  SET_DESIRE_DATA,
  SET_MASTURBATION_DATA,
  SET_SEX_DATA
} from '../actions/dataAction';

const initialState = {
  'desire': {},
	'masturbation': {},
	'sex': {}
};

function desire (state = initialState, action) {
	switch (action.type) {
		case SET_DESIRE_DATA:
      const key = Moment(action.data.date).format('D-MM-YYYY');
      const newDesire = {...state.desire};
      console.info();
			return {
				...state.desire,
				desire: action.data
			}
		case SET_MASTURBATION_DATA:
			return {
				...state,
				masturbation: action.data
			}
		case SET_SEX_DATA:
			return {
				...state,
				sex: action.data
			}
	}
	return state
}
 
export default desire;
