import { fromUnixTime, format, getDay } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { WEEK_DAYS_BR } from './constants';

export const convertUnixDate = unixDate => fromUnixTime(unixDate);

export const getWeekDay = date => WEEK_DAYS_BR[getDay(date)];

export const formatLongDate = date =>
  format(date, "dd 'de' MMMM", { locale: pt });

export const convertUnixToLongDate = unixDate =>
  formatLongDate(convertUnixDate(unixDate));

export const converUnixToWeekDay = unixDate =>
  getWeekDay(convertUnixDate(unixDate));
