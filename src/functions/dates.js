import Moment from 'moment';

export const formatSexDate = function (date){
  return Moment(date).format('MM-D-YYYY_h-mm');
}
