<template>
  <article class="post-preview">
    <nuxt-link to="/" class="post-preview-header">
      <PrismicRichText :field="post.node.title" />
      <div class="post-preview-info">
        <span>{{ formattedDate }}</span>
        <span>{{ post.node.category }}</span>
      </div>
    </nuxt-link>
    <div class="post-preview-body">
      <PrismicRichText :field="post.node.summary" />
    </div>
    <nuxt-link to="/" class="read-more">Read more</nuxt-link>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Post } from '~/graphql/types';
import { usePost } from '~/composables/usePost';

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },

  setup(props) {
    const { formattedDate } = usePost(props.post);

    return { props, formattedDate };
  },
});
</script>

<style scoped>
>>> h3 {
  @apply text-2xl mb-1;
}

.read-more {
  @apply text-lg text-blue-500 underline;
}

.post-preview-header {
  @apply block mb-8;
}

.post-preview-info {
  @apply flex;
}

span:not(:first-of-type) {
  @apply border-l border-solid border-gray-600 ml-2 pl-2;
}

span {
  @apply text-gray-600;
}
</style>
