<template>
  <article class="post">
    <div class="post-header">
      <h1>{{ post.node.title[0].text }}</h1>
      <div class="post-info">
        <span>{{ formattedDate }}</span>
        <span>{{ post.node.category }}</span>
      </div>
    </div>
    <div class="post-body">
      <PrismicRichText :field="post.node.body" />
    </div>
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
    const { formattedDate, slug } = usePost(props.post);

    return { props, formattedDate, slug };
  },
});
</script>

<style scoped>
h1 {
  @apply text-2xl mb-1;
}

.post-header {
  @apply block mb-8;
}

.post-info {
  @apply flex;
}

span:not(:first-of-type) {
  @apply border-l border-solid border-gray-600 ml-2 pl-2;
}

span {
  @apply text-gray-600;
}

@screen sm {
  .post {
    @apply max-w-xl mx-auto;
    padding-top: calc(80px + 3rem);
  }
}
</style>
