<template>
  <main>
    <section class="contact">
      <h1>Let's talk</h1>
      <div>
        <Form />
        <div>
          <Info />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Info from '../../components/Contact/Info.vue';
import Form from '../../components/Contact/Form.vue';

export default defineComponent({
  components: { Form, Info },
  setup() {},
});
</script>
