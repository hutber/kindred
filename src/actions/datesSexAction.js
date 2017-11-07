export const SET_DATE = 'SET_DATE';
export const ADD_DATES = 'ADD_DATES';
export const REMOVE_DATES = 'REMOVE_DATES';

export function changeCurrentSexDate(date) {
  return {
    type: SET_DATE,
    currentDate: date
  }
}

export function pushToDates(date) {
	return {
		type: ADD_DATES,
    currentDate: date
	}
}
