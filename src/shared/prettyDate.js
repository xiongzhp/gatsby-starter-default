import { DateTime } from 'luxon';

export const prettyDate = (dateString) => {
  const dateObj = DateTime.fromISO(dateString);
  const prettyDate = dateObj.toFormat("EEEE '|' MMMM dd yyyy '|' hh':'mm a");

  return prettyDate;
};
