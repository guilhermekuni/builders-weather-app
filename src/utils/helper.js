import { fromUnixTime, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const convertUnixDate = unixDate => fromUnixTime(unixDate);

export const formatLongDate = date =>
  format(date, "dd 'de' MMMM", { locale: pt });

export const convertUnixToLongDate = unixDate =>
  formatLongDate(convertUnixDate(unixDate));
