import Moment from 'moment';

export const formatSexData = function (date){
  return Moment(date).format('MM-D-YYYY_h-mm');
}
