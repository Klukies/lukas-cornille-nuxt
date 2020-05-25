<template>
  <main>
    <Hero />
    <About />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '../components/Home/About.vue';
import Hero from '../components/Home/Hero.vue';

export default Vue.extend({
  components: { Hero, About },
});
</script>

<style scoped>
main {
  @apply my-0 mx-auto pt-20;
}
</style>
