<template>
  <button
    ref="hamburger"
    class="hamburger hamburger-spin"
    :class="{ 'is-active': isActive }"
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
  components: {},
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive;
      this.$emit('click');
    },
  },
});
</script>

<style scoped src="~/assets/css/hamburger.css"></style>
