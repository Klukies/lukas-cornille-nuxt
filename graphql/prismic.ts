import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

export const prismic = new ApolloClient({
  link: PrismicLink({
    uri: 'https://lukas-cornille.prismic.io/graphql',
  }),
  cache: new InMemoryCache(),
});
