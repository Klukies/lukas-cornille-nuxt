<template>
  <header>
    <Brand />
    <Hamburger :is-active="isMenuActive" @click="$emit('toggleMenu')" />
    <Navigation @openContactModal="$emit('openContactModal')" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Hamburger from './Hamburger.vue';
import Navigation from './Navigation.vue';
import Brand from './Brand.vue';

export default Vue.extend({
  components: { Brand, Navigation, Hamburger },
  props: {
    isMenuActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
header {
  @apply fixed flex py-4 pl-4 justify-between items-center bg-gray-900 fixed w-full z-50;
  padding-right: calc(100vw - 100%);
}

@screen md {
  header {
    @apply px-20;
  }
}

@screen 2xl {
  header {
    @apply px-48;
  }
}
</style>
