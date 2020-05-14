<template>
  <header>
    <Brand />
    <Navigation @openContactModal="$emit('openContactModal')" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from './Navigation.vue';
import Brand from './Brand.vue';

export default Vue.extend({
  components: { Brand, Navigation },
  data() {
    return {};
  },
});
</script>

<style scoped>
header {
  @apply flex py-4 justify-between items-center bg-gray-900 fixed w-full z-50;
  padding-left: 18rem;
  padding-right: 18rem;
}
</style>
