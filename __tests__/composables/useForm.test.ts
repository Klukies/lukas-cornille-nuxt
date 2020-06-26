import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import { useForm, VALIDATION_RULES, FORM_STATES } from '~/composables/useForm';
import { mockForm } from '~/__mocks__/form';

let mockedForm: Record<string, string>;
enableFetchMocks();

describe('useForm', () => {
  beforeEach(() => {
    mockedForm = { ...mockForm };
  });

  it('will create an error Record object based on the form argument', () => {
    const { errors } = useForm(mockedForm, '/', {});

    expect(Object.keys(errors).length).toEqual(5);
    Object.keys(errors).forEach((key) => expect(mockedForm[key]).not.toBeUndefined());
  });

  it('can validate required form items', () => {
    mockedForm.lastName = 'lastName';
    const { errors, handleSubmit, formState } = useForm(mockedForm, '/', {
      firstName: [VALIDATION_RULES.REQUIRED],
      lastName: [VALIDATION_RULES.REQUIRED],
    });

    handleSubmit();
    expect(errors.firstName).toEqual('This field is required');
    expect(errors.lastName).toEqual('');
    expect(formState.value).toEqual(FORM_STATES.IN_PROGRESS);
  });

  it('can validate an email item', async () => {
    const invalidEmails = ['', 'foo', '@foo.com', 'foo.bar.com', 'foo.@bar.com'];
    fetchMock.mockResponse('');
    const { errors, handleSubmit, formState } = useForm(mockedForm, '/', {
      email: [VALIDATION_RULES.EMAIL],
    });

    invalidEmails.forEach((invalidEmail) => {
      mockedForm.email = invalidEmail;
      handleSubmit();
      expect(errors.email).toEqual('This is not a valid email');
      expect(formState.value).toEqual(FORM_STATES.IN_PROGRESS);
    });

    mockedForm.email = 'foo@bar.com';
    await handleSubmit();
    expect(errors.email).toEqual('');
    expect(formState.value).toEqual(FORM_STATES.SUCCESS);
  });

  it('will not validate if no validation rules where given', async () => {
    fetchMock.mockResponse('');
    const { errors, handleSubmit, formState } = useForm(mockedForm, '/', {});

    await handleSubmit();
    Object.keys(errors).forEach((key) => expect(errors[key]).toEqual(''));
    expect(formState.value).toEqual(FORM_STATES.SUCCESS);
  });

  it('can handle a Fetch API error', async () => {
    fetchMock.mockReject();
    const { handleSubmit, formState } = useForm(mockedForm, '/', {});

    await handleSubmit();
    expect(formState.value).toEqual(FORM_STATES.ERROR);
  });
});
