<template>
  <button :class="classes.join(' ')" @click="$emit('click')">{{ label }}</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
    classes: {
      type: Array,
      required: false,
      default: undefined,
      validator: (array) => array.every((item) => typeof item === 'string'),
    },
  },
});
</script>

<style scoped>
button {
  @apply py-1 px-4 font-bold text-lg outline-none;
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
