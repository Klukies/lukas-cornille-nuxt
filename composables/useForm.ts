import Vue from 'vue';
import { ref, reactive } from 'nuxt-composition-api';

export enum FORM_STATES {
  IN_PROGRESS = 'in-progress',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum VALIDATION_RULES {
  REQUIRED = 'required',
  EMAIL = 'email',
}

const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const formState = ref(FORM_STATES.IN_PROGRESS);
const errors: Record<string, string> = reactive({});

const encode = (data: Record<string, string>): string => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const validate = (
  form: Record<string, string>,
  formValidationRules: Record<string, VALIDATION_RULES[]>,
): boolean => {
  let hasNoErrors = true;
  Object.keys(formValidationRules).forEach((key) => {
    if (formValidationRules[key].includes(VALIDATION_RULES.REQUIRED)) {
      if (form[key] === '') {
        errors[key] = 'This field is required';
        hasNoErrors = false;
      } else {
        errors[key] = '';
      }
    }

    if (hasNoErrors && formValidationRules[key].includes(VALIDATION_RULES.EMAIL)) {
      if (!form[key].match(emailFormat)) {
        errors[key] = 'This is not a valid email';
        hasNoErrors = false;
      } else {
        errors[key] = '';
      }
    }
  });

  return hasNoErrors;
};

export const useForm = (
  form: Record<string, string>,
  endpoint: string,
  formValidationRules: Record<string, VALIDATION_RULES[]>,
) => {
  // Using Vue.set() makes each error reactive and allows the component to track it
  Object.keys(form).forEach((key) => Vue.set(errors, key, ''));

  const handleSubmit = (): void => {
    if (!validate(form, formValidationRules)) {
      return;
    }

    fetch(endpoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        formState.value = FORM_STATES.SUCCESS;
      })
      .catch(() => {
        formState.value = FORM_STATES.ERROR;
      });
  };

  return { errors, handleSubmit, formState };
};
