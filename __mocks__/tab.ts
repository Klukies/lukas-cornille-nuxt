import { Tab } from '../graphql/types';

export const mockTabs: Tab[] = [
  {
    node: {
      tabtitle: 'About',
      image: {
        dimensions: {
          width: 1,
          height: 1,
        },
        alt: 'image',
        url: 'http://localhost:3000/image',
      },
      title: [{ type: 'heading1', text: 'heading1' }],
      text: [{ type: 'paragraph', text: 'paragraph1', spans: [] }],
    },
  },
  {
    node: {
      tabtitle: 'Skills',
      image: {
        dimensions: {
          width: 1,
          height: 1,
        },
        alt: 'image',
        url: 'http://localhost:3000/image',
      },
      title: [{ type: 'heading1', text: 'heading2' }],
      text: [{ type: 'paragraph', text: 'paragraph2', spans: [] }],
    },
  },
];
