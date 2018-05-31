import { REGISTER_COMPLETE, FINISH_STEP_1, CHANGE_FIELD_VAL } from '../../actions/user/signUpAction';

const initialState = {
  emailaddress: '',
  pw1: '',
  pw2: '',
  birthdate: '',
  sexualPreference: '',
  sex: '',
  password: null,
  step_1: false,
  complete: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FINISH_STEP_1:
      return {
        ...state,
        ...action.data
      };
    case REGISTER_COMPLETE:
      return {
        ...initialState,
        emailaddress: action.email,
        complete: action.successfulRegistration
      };
    case CHANGE_FIELD_VAL:
      return {
        ...state,
        ...action.data
      };
  }
  return state;
}
