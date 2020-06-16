<template>
  <main>
    <section class="contact">
      <div class="contact-info">
        <h1>Let's talk</h1>
        <div class="contact-body">
          <div class="info">
            <Info info="lukascornille@hotmail.com">
              <EmailLogo />
            </Info>
            <Info info="+32499 63 38 41" :is-phone="true">
              <PhoneLogo />
            </Info>
          </div>
          <Form />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Info from '~/components/Contact/Info.vue';
import Form from '~/components/Contact/Form.vue';
import EmailLogo from '~/assets/icons/mail.svg';
import PhoneLogo from '~/assets/icons/phone.svg';

export default defineComponent({
  components: { Form, Info, EmailLogo, PhoneLogo },
  setup() {},
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact information and a contact form to get in touch with me',
        },
      ],
    };
  },
});
</script>

<style scoped>
.contact {
  @apply mb-12;
  padding-top: calc(80px + 1rem);
}

.contact h1 {
  @apply text-4xl mb-6;
}

@screen sm {
  .contact-info {
    @apply max-w-4xl mx-auto;
  }

  .contact-body {
    @apply flex flex-row-reverse justify-center;
  }

  .info {
    @apply flex-grow-0;
  }
}
</style>
