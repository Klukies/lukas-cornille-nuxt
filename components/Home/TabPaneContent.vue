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
.tab-content {
  @apply flex;
}
</style>
