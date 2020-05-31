<template>
  <section class="blog-preview">
    <h2>New posts</h2>
    <div class="posts">
      <PostPreview v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import PostPreview from '../Shared/PostPreview.vue';
import { Post } from '~/graphql/types';

export default Vue.extend({
  components: { PostPreview },
  props: {
    posts: {
      type: Array as () => Post[],
      required: true,
    },
  },
});
</script>

<style scoped>
.blog-preview {
  @apply bg-gray-900 z-20 pt-8;
  min-height: calc(75vh + 2rem);
}

h2 {
  @apply text-6xl font-bold mb-12;
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
