import { reactive } from 'nuxt-composition-api';

export const mockForm: Record<string, string> = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
});
