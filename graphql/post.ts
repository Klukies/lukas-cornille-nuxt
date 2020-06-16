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
            uid
            firstPublicationDate
          }
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query post($slug: String!) {
    allPosts(uid: $slug) {
      edges {
        node {
          title
          wppublicationdate
          category
          summary
          body
          _meta {
            uid
            firstPublicationDate
          }
        }
      }
    }
  }
`;
