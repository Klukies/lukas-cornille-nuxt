import { mount } from '@vue/test-utils';
import Hamburger from '~/components/Header/Hamburger.vue';

describe('Hamburger Component', () => {
  it('can render in an active state', async () => {
    const wrapper = mount(Hamburger, {
      propsData: {
        isActive: true,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.get('button').classes()).toContain('is-active');
  });

  it('can render in an non-active state', async () => {
    const wrapper = mount(Hamburger, {
      propsData: {
        isActive: false,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.get('button').classes()).not.toContain('is-active');
  });

  it('will emit the click event', async () => {
    const wrapper = mount(Hamburger, {
      propsData: {
        isActive: false,
      },
    });

    wrapper.get('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
