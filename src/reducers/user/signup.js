import {
  FINISH_STEP_1
} from '../../actions/user/signUpAction';

const initialState = {
  email: 'jamie@hutber.com',
  pw1: 'test',
  pw2: 'test',
  pw: null,
  step_1: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FINISH_STEP_1:

      return {
        ...action.data,
        ...state,
      };
  }
  return state;
}
