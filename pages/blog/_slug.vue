<template>
  <main>
    <section>
      <Post :post="post" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Post from '../../components/Blog/Post.vue';
import { GET_POST } from '../../graphql/post';
import { Posts } from '../../graphql/types';
import { prismic } from '~/graphql/prismic';

export default Vue.extend({
  components: { Post },
  async asyncData({ params }) {
    const { data }: Posts = await prismic.query({
      query: GET_POST,
      variables: { slug: params.slug },
    });

    return { post: data.allPosts.edges[0] };
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap',
        },
      ],
    };
  },
});
</script>
