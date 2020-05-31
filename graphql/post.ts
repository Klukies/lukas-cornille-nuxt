import gql from 'graphql-tag';

export const GET_POSTS_PREVIEW = gql`
  query allPosts {
    allPosts(sortBy: meta_firstPublicationDate_DESC) {
      edges {
        node {
          title
          wppublicationdate
          category
          summary
          _meta {
            firstPublicationDate
          }
        }
      }
    }
  }
`;
