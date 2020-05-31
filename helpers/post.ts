/*
 * This File is not used in my application
 * It is used to provide an example of vue 2 vs vue 3
 */

enum MONTHS {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

export const formatDate = (publicationDate: string, wpPublicationDate?: string): string => {
  const parseDate = (date: Date) => {
    return `${MONTHS[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
  };

  return wpPublicationDate
    ? parseDate(new Date(wpPublicationDate))
    : parseDate(new Date(publicationDate));
};
