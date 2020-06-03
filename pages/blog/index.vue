<template>
  <main>
    <section class="blog-preview">
      <div class="posts">
        <PostPreview v-for="(post, index) in posts" :key="index" :post="post" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import PostPreview from '../../components/Shared/PostPreview.vue';
import { prismic } from '~/graphql/prismic';
import { Posts } from '~/graphql/types';
import { GET_POSTS_PREVIEW } from '~/graphql/post';

export default Vue.extend({
  components: { PostPreview },
  async asyncData() {
    const { data }: Posts = await prismic.query({ query: GET_POSTS_PREVIEW });

    return { posts: data.allPosts.edges };
  },
});
</script>

<style scoped>
.blog-preview {
  @apply bg-gray-900 z-20;
  padding-top: calc(80px + 1rem);
}

>>> .post-preview {
  @apply mb-12;
}

>>> .post-preview:not(:last-of-type) {
  @apply pb-12 border-b border-solid border-gray-800;
}

@screen sm {
  .posts {
    @apply max-w-xl m-auto;
  }
}
</style>
