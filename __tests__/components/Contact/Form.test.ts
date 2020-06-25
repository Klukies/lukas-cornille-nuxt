import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import { mount } from '@vue/test-utils';
import { mockForm, mockCompletedForm } from '../../../__mocks__/form';
import Form from '~/components/Contact/Form.vue';

enableFetchMocks();

describe('Form Component', () => {
  it("can render in it's default state", async () => {
    const wrapper = mount(Form);
    await wrapper.vm.$nextTick();

    Object.keys(wrapper.vm.$data.form).forEach((key) => expect(mockForm[key]).toBeDefined());
    expect(wrapper.vm.$data.submitValue).toEqual('Send Message');
  });

  it('can render in a successful state', async () => {
    const wrapper = mount(Form);
    await wrapper.vm.$nextTick();

    Object.assign(wrapper.vm.$data.form, mockCompletedForm);
    wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$data.submitValue).toEqual('Successfully sent!');
  });

  it('can render in a failed state', async () => {
    fetchMock.mockReject();
    const wrapper = mount(Form);
    await wrapper.vm.$nextTick();

    Object.assign(wrapper.vm.$data.form, mockCompletedForm);
    wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$data.submitValue).toEqual('Something went wrong!');
  });
});
