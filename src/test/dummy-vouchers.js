import getTime from 'date-fns/get_time';
import addDays from 'date-fns/add_days';
import addYears from 'date-fns/add_years';
import subDays from 'date-fns/sub_days';
import subYears from 'date-fns/sub_years';

const defaultVoucher = date => ({
  activated: true,
  activationDate: getTime(subYears(date, 1)), // activated a year ago
  cancellationDate: null,
  cancelled: false,
  currency: 'GBP',
  customerId: '802430',
  debitable: true,
  expired: false,
  expiresAfter: {
    days: 0,
    months: 12, // expires in a year
  },
  expiryDate: getTime(addYears(date, 1)), // expires in a year
  initialBalance: {
    text: '£10.00',
    value: 10.0,
  },
  lastDebitedOn: null,
  maskedVoucherCode: '1B34D678xxxxxxxx',
  redeemed: false,
  remainingBalance: {
    text: '£10.00',
    value: 10.0,
  },
  voucherCode: '1B34D678E012F4G6',
  voucherType: 'Gift voucher',
});

// active, expires in 3 days
export const activeVoucherExpiresIn3Days = date => ({
  ...defaultVoucher(date),
  expiryDate: getTime(addDays(date, 3)),
  expiresAfter: {
    days: 3,
    months: 0,
  },
});

// active, expires in 1 day
export const activeVoucherExpiresIn1Day = date => ({
  ...defaultVoucher(date),
  expiryDate: getTime(addDays(date, 1)),
  expiresAfter: {
    days: 1,
    months: 0,
  },
});

// active, expires in over a year
export const activeVoucherExpiresInOverAYear = date => defaultVoucher(date);

// redeemed, redeemed a day ago
export const redeemedVoucherADayAgo = date => ({
  ...defaultVoucher(),
  debitable: false,
  lastDebitedOn: getTime(subDays(date, 1)),
  redeemed: true,
  remainingBalance: {
    text: '£0.00',
    value: 0.0,
  },
});

// redeemed, redeemed a year ago
export const redeemedVoucherAYearAgo = date => ({
  ...defaultVoucher(),
  debitable: false,
  lastDebitedOn: getTime(subYears(date, 1)),
  redeemed: true,
});

// redeemed, redeemed a year ago but also expired
export const redeemedVoucherAYearAgoAndExpired = date => ({
  ...defaultVoucher(),
  debitable: false,
  lastDebitedOn: getTime(subYears(date, 1)),
  redeemed: true,
  expired: true,
  expiresAfter: {
    days: 0,
    months: 0,
  },
  expiryDate: getTime(subYears(date, 2)),
});

// expired a day ago
export const expiredVoucherADayAgo = date => ({
  ...defaultVoucher(),
  debitable: false,
  expired: true,
  expiresAfter: {
    days: 0,
    months: 0,
  },
  expiryDate: getTime(subDays(date, 1)),
});

// expired over a year ago
export const expiredVoucherOverAYearAgo = date => ({
  ...defaultVoucher(),
  debitable: false,
  expired: true,
  expiresAfter: {
    days: 0,
    months: 0,
  },
  expiryDate: getTime(subYears(date, 1)),
});

// cancelled a day ago
export const cancelledVoucherADayAgo = date => ({
  ...defaultVoucher(),
  debitable: false,
  cancellationDate: getTime(subDays(date, 1)),
  cancelled: true,
});

// cancelled over a year ago
export const cancelledVoucherOverAYearAgo = date => ({
  ...defaultVoucher(),
  debitable: false,
  cancelled: true,
  cancellationDate: getTime(subYears(date, 1)),
});
