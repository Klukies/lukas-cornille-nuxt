<template>
  <div class="floating-label">
    <slot />
    <label :for="name" :class="{ 'label-error': error }">{{ label }}</label>
    <span class="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    error: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },

  // Currently just returning props in setup is seen as not covered code
  // istanbul ignore next
  setup(props) {
    return { props };
  },
});
</script>

<style scoped>
input[type='text'] {
  @apply w-full text-white h-8 py-5 transition-all ease-linear duration-300 rounded-none;
  height: 3.5rem;
  border: none;
  border-bottom: solid 1px #718096;
}

input[type='text']::placeholder {
  @apply text-gray-500 opacity-100;
}

input[type='text']::placeholder,
.message label {
  @apply text-xs;
}

input[type='text']:focus {
  @apply outline-none border-orange-700;
}

.floating-label {
  @apply relative mb-4 px-1;
}

.floating-label label {
  @apply absolute opacity-0 text-xs text-gray-500;
  z-index: -1;
  top: calc(50% - 7px);
  left: 0.25rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.floating-label input[type='text']:not(:placeholder-shown) {
  padding: 34px 0px 12px 0px;
}

.floating-label input[type='text']:not(:placeholder-shown) + label {
  @apply opacity-100 z-10;
  transform: translateY(-10px);
}

.label-error {
  top: calc(50% - 19px) !important;
}

.error {
  @apply text-xs text-red-600;
}
</style>
