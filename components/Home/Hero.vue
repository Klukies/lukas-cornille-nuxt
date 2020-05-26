<template>
  <section class="hero">
    <div class="hero-info">
      <h1>
        I'm
        <span>Lukas</span> Cornille
      </h1>
      <h2>Full Stack Developer</h2>
      <Socials />
    </div>
    <div class="hero-image">
      <picture>
        <source srcset="~/assets/images/me.webp" type="image/webp" />
        <source srcset="~/assets/images/me.png" type="image/png" />
        <img src="~/assets/images/me.png" alt="me" />
      </picture>
      <span class="spotlight"></span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Socials from '../Shared/Socials.vue';

export default Vue.extend({
  components: { Socials },
  data() {
    return {};
  },
});
</script>

<style scoped>
.hero {
  @apply flex z-10 bg-gray-900;
  height: 75vh;
}

.hero-info {
  @apply self-center;
}

.hero-image {
  @apply hidden w-auto;
}

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-2xl mb-2;
}

@screen sm {
  h1 {
    @apply text-7xl font-bold;
  }
}

@screen lg {
  .hero {
    @apply flex-row;
  }

  .hero-image {
    @apply flex ml-auto;
  }

  .hero-info {
    @apply self-center;
  }

  h1 {
    @apply text-7xl font-bold;
  }

  h2 {
    @apply text-4xl mb-10;
  }
}

span {
  @apply text-orange-700;
}

picture {
  @apply z-20 relative;
}

source,
picture img {
  @apply h-full w-auto bg-transparent object-cover mx-auto;
}

.spotlight {
  @apply relative block rounded-full bg-transparent z-10;
  top: 50%;
  right: 45%;
  box-shadow: 0 65px 250px 250px rgba(211, 97, 53, 0.5);
}
</style>
