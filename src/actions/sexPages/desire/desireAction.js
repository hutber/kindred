export const SET_DESIRE_DATA = 'SET_DESIRE_DATA';
export const SET_DESIRE = 'SET_DESIRE';
export const SET_DATE = 'SET_DATE';

export function changeDesireLevel(desireLevel) {
  return {
    type: SET_DESIRE,
    desire: desireLevel
  }
}

export function changeDesireDate(date) {
  return {
    type: SET_DATE,
    date
  }
}

export function pushToDesire(data) {
  return {
    type: SET_DESIRE_DATA,
    data
  }
}
