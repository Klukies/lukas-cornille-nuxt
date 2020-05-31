<template>
  <div class="post-preview">
    <div class="post-preview-header">
      <PrismicRichText :field="post.node.title" />
      <div class="post-preview-info">
        <span>{{ formattedDate }}</span>
        <span>{{ post.node.category }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/*
 * This Component is not used in my application
 * It is used to provide an example of vue 2 vs vue 3
 */
import Vue from 'vue';
import { Post } from '~/graphql/types';
import { formatDate } from '~/helpers/post';

export default Vue.extend({
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return formatDate(
        this.post.node._meta.firstPublicationDate,
        this.post.node.wppublicationdate,
      );
    },
  },
});
</script>

<style scoped>
>>> h3 {
  @apply text-2xl mb-1;
}
</style>
