<template>
  <Button
    label="Let's talk"
    :classes="['button-orange', 'button-outlined', 'button-swipe-left']"
    @click="$emit('openContactModal')"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../Shared/Button.vue';

export default Vue.extend({
  components: { Button },
  data() {
    return {};
  },
});
</script>
