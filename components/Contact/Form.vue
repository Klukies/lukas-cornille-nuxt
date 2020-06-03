<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <h2>Get in touch</h2>
    <input type="hidden" name="form-name" value="contact" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {},

  setup() {},
});
</script>
