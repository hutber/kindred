import { formatSexDate } from '../../../functions/dates';
import {
  SET_DESIRE_DATA,
} from '../../../actions/sexPages/desire/desireAction';

const initialState = {};

function desireReducer (state = initialState, action) {
	switch (action.type) {
    case SET_DESIRE_DATA:
      const key = formatSexDate(action.data.currentDate);
      const newDesire = {...state.desire};
      newDesire[key] = action.data;

      const newState = Object.assign({}, state, newDesire);
			return newState;
	}
	return state
}
 
export default desireReducer;

import * as actions from './actions';
import mvt from './reducer';

describe('Desire Reducer', function(){
	describe('SET_DESIRE_DATA', function () {
		it('Adds the selected user date to the desire dates', function () {
			const initialState = {};
			const testDate = new Date();
		})
	})
});

describe('MVT selectors', () => {
	describe('REQUEST_ADOBE_TARGET_OFFER', () => {
		it('adds an entry to the offers object with the correct key and with a loaded status of `false`', () => {
			const initialState = {
				offers: {},
			};
			const testId = 'TEST_ID';
			const expectedState = {
				offers: {
					[testId]: { loaded: false, value: undefined },
				},
			};
			const result = mvt(initialState, actions.requestTargetOffer(testId));
			expect(result).toEqual(expectedState);
		});
	});

	describe('RECEIVE_ADOBE_TARGET_OFFER', () => {
		it('updates the appropriate entry in the offers object loaded status of `true` and the `value` provided in the payload', () => {
			const testId = 'TEST_ID';
			const value = 'VALUE';
			const initialState = {
				offers: {
					foo: { loaded: true, value: 'foo' },
					[testId]: { loaded: false, value: undefined },
					bar: { loaded: false, value: undefined },
				},
			};
			const expectedState = {
				offers: {
					foo: { loaded: true, value: 'foo' },
					[testId]: { loaded: true, value },
					bar: { loaded: false, value: undefined },
				},
			};

			const payload = { testId, value };
			const result = mvt(initialState, actions.recieveTargetOffer(payload));
			expect(result).toEqual(expectedState);
		});
	});
});
