import Moment from 'moment';

export const formatSexDate = function (date){
  return Moment(date).format('MM-DD-YYYY_h-mm');
}

export const SexDateOnly = function (date){
  return Moment(date).format('MM-DD-YYYY');
}

export const TrimDateThenSexDateOnly = function (date){
  return Moment(date.slice(0, 10)).format('MM-DD-YYYY');
}

export const TrimDateReturnTodaysDate = function (dates, currentDate){
	const ObsDate = Object.keys(dates);
	const convertedDates = ObsDate.filter((index) => {
		return TrimDateThenSexDateOnly(index) === SexDateOnly(currentDate)
	});
	return convertedDates.length === 0 ? null : convertedDates;
}
