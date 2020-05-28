<template>
  <div class="tab-content">
    <div class="tab-content-image">
      <slot name="image" />
    </div>
    <div class="tab-content-text">
      <slot name="text" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
.tab-content-image {
  @apply w-1/3 m-auto;
}

@screen lg {
  .tab-content {
    @apply flex;
  }

  .tab-content-image,
  .tab-content-text {
    @apply w-1/2 p-8;
  }

  .tab-content-image {
    @apply block;
  }
}
</style>
