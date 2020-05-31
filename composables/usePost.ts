import { computed } from '@vue/composition-api';
import { Post } from '../graphql/types';

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

const formatPublicationDate = (prismicPublicationDate: string, wpPublicationDate?: string) => {
  const parseDate = (date: Date) => {
    return `${MONTHS[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
  };

  return wpPublicationDate
    ? parseDate(new Date(wpPublicationDate))
    : parseDate(new Date(prismicPublicationDate));
};

export const usePost = (post: Post) => {
  const formattedDate = computed(() =>
    formatPublicationDate(post.node._meta.firstPublicationDate, post.node.wppublicationdate),
  );

  return { formattedDate };
};
