<template>
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <h2>Get in touch</h2>
    <div class="bot-field">
      <label>Don't fill this out if you're human:</label>
      <input type="hidden" name="bot-field" />
    </div>
    <div class="name">
      <FloatingLabel name="firstName" label="First Name:" :error="errors.firstName">
        <input v-model="form.firstName" type="text" name="firstName" placeholder="First Name" />
      </FloatingLabel>
      <FloatingLabel name="lastName" label="Last Name:" :error="errors.lastName">
        <input v-model="form.lastName" type="text" name="lastName" placeholder="Last Name" />
      </FloatingLabel>
    </div>
    <FloatingLabel name="email" label="Email Address:" :error="errors.email">
      <input v-model="form.email" type="text" name="email" placeholder="Email" />
    </FloatingLabel>
    <FloatingLabel name="subject" label="Subject:" :error="errors.subject">
      <input v-model="form.subject" type="text" name="subject" placeholder="Subject" />
    </FloatingLabel>
    <div class="message">
      <label for="message">Message:</label>
      <textarea v-model="form.message" name="message" />
      <span class="error">{{ errors.message }}</span>
    </div>
    <input
      type="submit"
      :class="{ 'submit-success': formState === 'success', 'submit-error': formState === 'error' }"
      :value="submitValue"
      :disabled="formState === 'success'"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
import FloatingLabel from './FloatingLabel.vue';
import { useForm, VALIDATION_RULES, FORM_STATES } from '~/composables/useForm';

export default defineComponent({
  components: { FloatingLabel },
  setup() {
    const form: Record<string, string> = reactive({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });

    const { errors, handleSubmit, formState } = useForm(form, '/', {
      firstName: [VALIDATION_RULES.REQUIRED],
      lastName: [VALIDATION_RULES.REQUIRED],
      email: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.EMAIL],
      subject: [VALIDATION_RULES.REQUIRED],
      message: [VALIDATION_RULES.REQUIRED],
    });

    const submitValue = computed(() => {
      if (formState.value === FORM_STATES.SUCCESS) {
        return 'Successfully sent!';
      }

      if (formState.value === FORM_STATES.ERROR) {
        return 'Something went wrong!';
      }

      return 'Send Message';
    });

    return { form, errors, handleSubmit, formState, submitValue };
  },
});
</script>

<style scoped src="~/assets/css/form.css"></style>
