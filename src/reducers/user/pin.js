import {
	ADD_DIGIT,
	DELETE_DIGIT,
	ADD_CONFIRM_DIGIT,
	DELETE_CONFIRM_DIGIT,
} from '../../actions/user/pinActions';

const initialState = {
	pin: [null, null, null, null],
	pinConfirm: [null, null, null, null],
	pinConfirmed: false,
	pinFilledIn: false,
	pinConfirmFilledIn: false,
	pinsMatch: false,
};

export default function (state = initialState, action, data = {}) {
	switch (action.type) {
		case ADD_DIGIT || ADD_CONFIRM_DIGIT:

			const pinType = action.type === ADD_DIGIT ? 'pin' : 'pinConfirm';

			const indexDigitAdd = state[pinType].filter( (item,index)=>Number.isInteger(item)).length;

			let addPin = state[pinType];
			if(indexDigitAdd === 0){
				addPin[0] = action.digit;
			}else{
				addPin[indexDigitAdd] = action.digit;
			}

			const pinFilledIn = addPin.filter(item => item !== null).length === 4 ? true : false;

			return {
				...state
				, [pinType]: addPin
				, pinFilledIn
			};
		case DELETE_DIGIT || DELETE_CONFIRM_DIGIT:
			const indexDigitRemove = state.pin.filter( (item,index)=>Number.isInteger(item)).length;
			let newPin = state.pin;

			if(indexDigitRemove !== 0){
				newPin = state.pin.splice(indexDigitRemove-1, 1);
			}
			console.info(indexDigitRemove, newPin);
			return {
				...state
				, pin: initialState.pin
				, pinConfirmed: false
			};
	}
	return state
}
