export const CHANGE_FIELD_VAL = 'CHANGE_FIELD_VAL';
export const FINISH_STEP_1 = 'FINISH_STEP_1';

export function changeFieldVal(data) {
  return dispatch => {
    dispatch({
      type: CHANGE_FIELD_VAL,
      data
    });
  };
}

export function finishStep1(data) {
  return dispatch => {
    dispatch({
      type: FINISH_STEP_1,
      data
    });
  };
}
