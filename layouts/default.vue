<template>
  <div>
    <Header
      :is-menu-active="isMenuActive"
      @openContactModal="openContactModal"
      @toggleMenu="toggleMenu"
    />
    <MobileMenu v-scroll-lock="isMenuActive" :is-active="isMenuActive" @click="toggleMenu" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MobileMenu from '../components/Header/MobileMenu.vue';
import Header from '~/components/Header/Header.vue';

export default Vue.extend({
  components: { Header, MobileMenu },
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    openContactModal() {
      console.log('opening');
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
});
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  @apply box-border text-white bg-gray-900;
}

main {
  @apply my-0 mx-auto;
}

section {
  @apply relative px-4;
}

p {
  @apply text-lg mb-4;
}

.lazyLoad {
  opacity: 0;
  transition: all 0.7s ease;
}

.isLoaded {
  opacity: 1;
}

*,
*:before,
*:after {
  @apply box-border m-0;
}

@screen md {
  section {
    @apply px-20;
  }
}

@screen 2xl {
  section {
    @apply px-48;
  }
}
</style>
