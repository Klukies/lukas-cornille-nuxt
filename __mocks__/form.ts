import { reactive } from 'nuxt-composition-api';

export const mockForm: Record<string, string> = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
});

export const mockCompletedForm: Record<string, string> = {
  firstName: 'Foo',
  lastName: 'Bar',
  email: 'foo@bar.com',
  subject: 'foobar',
  message: 'foobar',
};
