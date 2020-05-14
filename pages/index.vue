<template>
  <main>
    <Hero />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '../components/Home/Hero.vue';

export default Vue.extend({
  components: { Hero },
});
</script>

<style scoped>
main {
  @apply my-0 mx-auto pt-20;
}
</style>
