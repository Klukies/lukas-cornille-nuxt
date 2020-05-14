<template>
  <div>
    <a href="https://github.com/LukasCornille" target="_blank">
      <GitHubLogo />
    </a>
    <a href="https://twitter.com/Klukies" target="_blank">
      <TwitterLogo />
    </a>
    <a href="https://www.linkedin.com/in/lukas-cornille-594376150/" target="_blank">
      <LinkedInLogo />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GitHubLogo from '~/assets/icons/github.svg';
import TwitterLogo from '~/assets/icons/twitter.svg';
import LinkedInLogo from '~/assets/icons/linkedin.svg';

export default Vue.extend({
  components: { TwitterLogo, LinkedInLogo, GitHubLogo },
});
</script>

<style scoped>
div {
  @apply flex items-center h-12;
}

a {
  @apply mr-6;
}

svg {
  @apply text-white h-8 w-8 fill-current;
}

svg path {
  @apply fill-current;
}
</style>
