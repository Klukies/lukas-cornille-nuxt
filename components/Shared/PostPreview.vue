<template>
  <article class="post-preview">
    <nuxt-link :to="slug" class="post-preview-header">
      <h3>{{ post.node.title[0].text }}</h3>
      <div class="post-preview-info">
        <span>{{ formattedDate }}</span>
        <span>{{ post.node.category }}</span>
      </div>
    </nuxt-link>
    <div class="post-preview-body">
      <PrismicRichText :field="post.node.summary" />
    </div>
    <nuxt-link :to="slug" class="read-more">Read more</nuxt-link>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api';
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
    const { formattedDate, slug } = usePost(props.post);

    return { props, formattedDate, slug };
  },
});
</script>

<style scoped>
>>> h3 {
  @apply text-2xl mb-1;
}

.read-more {
  @apply text-lg text-orange-600 underline;
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
