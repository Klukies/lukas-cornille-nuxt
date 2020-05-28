import gql from 'graphql-tag';

export const GET_ABOUT_TABS = gql`
  query allAbout_tabs {
    allAbout_tabs(sortBy: meta_firstPublicationDate_ASC) {
      edges {
        node {
          tabtitle
          image
          title
          text
        }
      }
    }
  }
`;
