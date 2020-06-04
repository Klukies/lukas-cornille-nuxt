<template>
  <a :href="isPhone ? `tel:${info}` : `mailto:${info}`">
    <slot />
    {{ info }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    info: {
      type: String,
      required: true,
    },
    isPhone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  setup(props) {
    return { props };
  },
});
</script>

<style scoped>
a {
  @apply flex items-center border border-gray-800 border-solid px-6 py-4 mb-4;
  border-radius: 0.25rem;
}

a:hover,
a:active {
  @apply border-orange-700;
}

svg {
  @apply w-6 h-6 mr-4;
}
</style>
