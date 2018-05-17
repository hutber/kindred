export const FINISH_STEP_1 = 'FINISH_STEP_1';

export function finishStep1(data) {
  return dispatch => {
    dispatch({
      type: FINISH_STEP_1,
      data
    });
  };
}
