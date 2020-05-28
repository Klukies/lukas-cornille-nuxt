interface Image {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  url: string;
}

interface RichText {
  type: string;
  text: string;
}

interface Title {
  type: string;
  text: string;
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
