<template>
  <div>
    <Header @openContactModal="openContactModal" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header/Header.vue';

export default Vue.extend({
  components: { Header },
  methods: {
    openContactModal() {
      console.log('opening');
    },
  },
});
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  @apply box-border text-white;
}

main {
  @apply my-0 mx-auto pt-20;
}

section {
  @apply relative px-72;
}

*,
*:before,
*:after {
  @apply box-border m-0;
}
</style>
