<template>
  <button
    ref="hamburger"
    class="hamburger hamburger-spin"
    :class="{ 'is-active': isActive }"
    aria-label="Toggle Mobile Menu"
    @click="handleClick"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
});
</script>

<style scoped src="~/assets/css/hamburger.css"></style>
