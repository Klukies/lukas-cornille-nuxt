import { mount } from '@vue/test-utils';
import FloatingLabel from '~/components/Contact/FloatingLabel.vue';

describe('FloatingLabel Component', () => {
  it('can render with an empty error message', () => {
    const wrapper = mount(FloatingLabel, {
      propsData: {
        error: '',
        name: 'firstName',
        label: 'First Name:',
      },
      slots: {
        default: '<div class="mocked-slot"></div>',
      },
    });

    expect(wrapper.get('.mocked-slot')).not.toBeNull();
    expect(wrapper.get('label').text()).toEqual('First Name:');
    expect(wrapper.get('.error').text()).toEqual('');
  });

  it('can render with an error message', () => {
    const wrapper = mount(FloatingLabel, {
      propsData: {
        error: 'This field is required',
        name: 'firstName',
        label: 'First Name:',
      },
      slots: {
        default: '<div class="mocked-slot"></div>',
      },
    });

    expect(wrapper.get('.mocked-slot')).not.toBeNull();
    expect(wrapper.get('label').text()).toEqual('First Name:');
    expect(wrapper.get('.error').text()).toEqual('This field is required');
  });
});
