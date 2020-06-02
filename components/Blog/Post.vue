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
        <PrismicRichText v-if="items[0].type !== 'preformatted'" class="text" :field="items" />
        <div
          v-for="(codeBlock, j) in items"
          v-else
          :key="j"
          class="code"
          v-html="$md.render(codeBlock.text)"
        />
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

>>> h2 {
  @apply text-2xl mb-2;
}

>>> ul {
  @apply pl-4 list-disc mb-4;
}

.post-header {
  @apply block mb-8 mx-auto;
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

>>> code {
  @apply rounded text-sm leading-8 mb-4 bg-gray-800 text-gray-300;
  font-family: 'Fira Code', 'Menlo', 'Monaco', 'Consolas', monospace;
}

@screen sm {
  .post {
    padding-top: calc(80px + 3rem);
  }

  .post-header {
    @apply max-w-xl;
  }

  .text {
    @apply max-w-xl mx-auto;
  }

  >>> code {
    min-width: 36rem;
  }

  .code {
    @apply max-w-xl mx-auto;
  }
}
</style>
