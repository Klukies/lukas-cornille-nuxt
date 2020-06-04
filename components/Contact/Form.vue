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
import { defineComponent, reactive } from '@vue/composition-api';
import { ref } from 'nuxt-composition-api';
import FloatingLabel from './FloatingLabel.vue';

export default defineComponent({
  components: { FloatingLabel },
  setup() {
    const encode = (data: Record<string, string>): string => {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    };

    const form: Record<string, string> = reactive({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });

    const errors: Record<string, string> = reactive({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });

    const validate = (): boolean => {
      let hasRequiredError = false;
      Object.keys(form).forEach((key) => {
        if (form[key] === '') {
          errors[key] = 'This field is required';
          hasRequiredError = true;
        } else {
          errors[key] = '';
        }
      });

      if (hasRequiredError) {
        return false;
      }

      const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!form.email.match(emailFormat)) {
        errors.email = 'This is not a valid email';
        return false;
      }

      return true;
    };

    enum FORMSTATES {
      IN_PROGRESS = 'in-progress',
      SUCCESS = 'success',
      ERROR = 'error',
    }
    const formState = ref(FORMSTATES.IN_PROGRESS);
    const submitValue = ref('Send Message');

    const handleSubmit = () => {
      if (!validate()) {
        return;
      }

      fetch('/', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
        .then(() => {
          formState.value = FORMSTATES.SUCCESS;
          submitValue.value = 'Successfully sent!';
        })
        .catch(() => {
          formState.value = FORMSTATES.ERROR;
          submitValue.value = 'Something went wrong!';
        });
    };

    return { form, errors, handleSubmit, formState, submitValue };
  },
});
</script>

<style scoped src="~/assets/css/form.css"></style>
