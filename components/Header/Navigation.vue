<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/blog" :class="{ 'nuxt-link-exact-active': isBlogActive }">Blog</nuxt-link>
    <nuxt-link to="/contact" class="link-button button-outlined button-swipe-left">
      Let's talk
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isBlogActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
nav {
  @apply hidden text-lg font-bold;
}

@screen md {
  nav {
    @apply block;
  }
}

.nuxt-link-exact-active {
  @apply text-orange-700;
}

a:not(:last-child) {
  @apply mr-10;
}

a:hover {
  @apply text-orange-700;
}

.link-button {
  @apply py-1 px-4 font-bold text-lg outline-none;
}

.link-button:hover {
  @apply text-white;
}

.nuxt-link-exact-active.button-swipe-left {
  @apply text-white;
  box-shadow: inset 200px 0 0 0 #d36135;
}

.button-outlined {
  @apply border border-orange-700;
}

.button-swipe-left {
  box-shadow: inset 0 0 0 0 #d36135;
  transition: ease-out 0.4s;
}

.button-swipe-left:hover {
  box-shadow: inset 200px 0 0 0 #d36135;
}
</style>
