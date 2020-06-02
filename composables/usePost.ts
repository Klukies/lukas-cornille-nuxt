import { computed } from 'nuxt-composition-api';
import prismicDOM from 'prismic-dom';
import { Post, RichText } from '../graphql/types';

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
    return `${MONTHS[date.getMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
  };

  return wpPublicationDate
    ? parseDate(new Date(wpPublicationDate))
    : parseDate(new Date(prismicPublicationDate));
};

const Elements = prismicDOM.RichText.Elements;

const formatBody = (prismicElements?: RichText[]): RichText[][] => {
  const mappedElements: RichText[][] = [[]];
  let mappedElementIndex = 0;
  let isCode = false;
  prismicElements!.forEach((element) => {
    if (
      (element.type === Elements.preformatted && !isCode) ||
      (element.type !== Elements.preformatted && isCode)
    ) {
      isCode = !isCode;
      mappedElementIndex++;
      mappedElements.push([]);
    }

    mappedElements[mappedElementIndex].push(element);
  });

  return mappedElements;
};

export const usePost = (post: Post) => {
  const formattedDate = computed(() =>
    formatPublicationDate(post.node._meta.firstPublicationDate, post.node.wppublicationdate),
  );
  const slug = computed(() => `/blog/${post.node._meta.uid}`);
  const formattedBody = computed(() => formatBody(post.node.body));

  return { formattedDate, slug, formattedBody };
};
