import * as path from 'path';
import webpack from 'webpack';
import ApolloClient from 'apollo-client';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const GET_POSTS = gql`
  query allPosts {
    allPosts {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          wppublicationdate
          category
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

const posts = [];

const fetchPaginatedRoutes = async (prismic) => {
  const { data } = await prismic.query({ query: GET_POSTS });
  data.allPosts.edges.forEach((edge) => posts.push(edge));
};

const getPostRoutes = async () => {
  const prismic = new ApolloClient({
    link: PrismicLink({
      uri: 'https://lukas-cornille.prismic.io/graphql',
    }),
    cache: new InMemoryCache(),
  });

  await fetchPaginatedRoutes(prismic);

  return posts.map((post) => {
    return {
      route: `/blog/${post.node._meta.uid}`,
      payload: post,
    };
  });
};

export default async () => {
  const posts = await getPostRoutes();
  return {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || '',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#d36135' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/vue-scroll-lock.client.ts', '~/plugins/prismic-vue.ts'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
      '@nuxt/typescript-build',
      // Doc: https://github.com/nuxt-community/stylelint-module
      '@nuxtjs/stylelint-module',
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      '@nuxtjs/tailwindcss',
      '@nuxtjs/markdownit',
      'nuxt-composition-api',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['nuxt-svg-loader', ['nuxt-lazy-load', { directiveOnly: true }]],

    markdownit: {
      injected: true,
      use: ['~/plugins/highlight.js'],
    },

    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
      extend: (config, ctx) => {
        config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(
          __dirname,
          './assets/icons/index.js',
        );

        // Run ESLint on save
        if (ctx.isDev && ctx.isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)|(\.svg$)/,
          });
        }
      },
    },

    generate: {
      routes: posts,
    },
  };
};
