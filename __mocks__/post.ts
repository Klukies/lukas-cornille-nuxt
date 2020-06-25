import { Post } from '../graphql/types';

export const mockPost: Post = {
  node: {
    category: 'Tutorial',
    summary: [{ type: 'paragraph', text: 'summary', spans: [] }],
    body: [
      { type: 'paragraph', text: 'paragraph1', spans: [] },
      { type: 'paragraph', text: 'paragraph2', spans: [] },
      { type: 'preformatted', text: 'codeBlock', spans: [] },
    ],
    title: [{ type: 'heading1', text: 'heading1' }],
    wppublicationdate: '2020-01-01',
    _meta: {
      uid: 'uid',
      firstPublicationDate: '2020-01-02T00:00:00+0000',
    },
  },
};
