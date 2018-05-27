import { FINISH_STEP_1, CHANGE_FIELD_VAL } from '../../actions/user/signUpAction';

const initialState = {
  emailaddress: 'jamie@hutber.com',
  pw1: 'test',
  pw2: 'test',
  birthdate: '',
  sexualPreference: '',
  sex: '',
  password: null,
  step_1: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FINISH_STEP_1:
      return {
        ...state,
        ...action.data
      };
    case CHANGE_FIELD_VAL:
      return {
        ...state,
        ...action.data
      };
  }
  return state;
}
