<template>
  <article class="post">
    <div class="post-header">
      <h1>{{ post.node.title[0].text }}</h1>
      <div class="post-info">
        <span>{{ formattedDate }}</span>
        <span>{{ post.node.category }}</span>
      </div>
    </div>
    <div v-if="post.node.body" class="post-body">
      <Fragment v-for="(items, i) in formattedBody" :key="i">
        <PrismicRichText v-if="items[0].type !== 'preformatted'" :field="items" />
        <div v-for="(codeBlock, j) in items" v-else :key="j" v-html="$md.render(codeBlock.text)" />
      </Fragment>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Fragment } from 'vue-fragment';
import { Post } from '~/graphql/types';
import { usePost } from '~/composables/usePost';

export default defineComponent({
  components: { Fragment },
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },

  setup(props) {
    const { formattedDate, formattedBody } = usePost(props.post);

    return { props, formattedDate, formattedBody };
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
