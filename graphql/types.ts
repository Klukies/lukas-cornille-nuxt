interface Image {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  url: string;
}

export interface RichText {
  type: string;
  text: string;
  spans: [];
}

interface Title {
  type: string;
  text: string;
}

interface Meta {
  uid: string;
  firstPublicationDate: string;
}

export interface Tab {
  node: {
    tabtitle: string;
    image: Image;
    title: Title[];
    text: RichText[];
  };
}

export interface Tabs {
  data: {
    // eslint-disable-next-line camelcase
    allAbout_tabs: {
      edges: Tab[];
    };
  };
}

export interface Post {
  node: {
    category: string;
    summary?: RichText[];
    body?: RichText[];
    title: Title[];
    wppublicationdate?: string;
    _meta: Meta;
  };
}

export interface Posts {
  data: {
    allPosts: {
      edges: Post[];
    };
  };
}
