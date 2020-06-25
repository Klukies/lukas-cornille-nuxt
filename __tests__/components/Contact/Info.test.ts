import { mount } from '@vue/test-utils';
import Info from '~/components/Contact/Info.vue';

describe('Info Component', () => {
  it('can render in a phone state', () => {
    const wrapper = mount(Info, {
      propsData: {
        isPhone: true,
        info: '123',
      },
      slots: {
        default: '<svg class="logo"></svg>',
      },
    });

    expect(wrapper.get('.logo')).not.toBeNull();
    expect(wrapper.get('a').attributes('href')).toEqual('tel:123');
    expect(wrapper.get('span').text()).toEqual('123');
  });

  it('can render in an email state', () => {
    const wrapper = mount(Info, {
      propsData: {
        isPhone: false,
        info: '123',
      },
      slots: {
        default: '<svg class="logo"></svg>',
      },
    });

    expect(wrapper.get('.logo')).not.toBeNull();
    expect(wrapper.get('a').attributes('href')).toEqual('mailto:123');
    expect(wrapper.get('span').text()).toEqual('123');
  });
});
