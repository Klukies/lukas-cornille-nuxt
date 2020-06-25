import { mount, RouterLinkStub } from '@vue/test-utils';
import MobileMenu from '~/components/Header/MobileMenu.vue';

describe('MobileMenu Component', () => {
  it('can render in an active state', async () => {
    const wrapper = mount(MobileMenu, {
      propsData: {
        isActive: true,
        isBlogActive: true,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.get('div').classes()).toContain('is-active');
    const blogLink = wrapper.findAll('a').at(1);
    expect(blogLink.classes()).toContain('nuxt-link-exact-active');
  });
  it('can render in a non-active state', async () => {
    const wrapper = mount(MobileMenu, {
      propsData: {
        isActive: false,
        isBlogActive: false,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.get('div').classes()).not.toContain('is-active');
    const blogLink = wrapper.findAll('a').at(1);
    expect(blogLink.classes()).not.toContain('nuxt-link-exact-active');
  });

  it('will emit the click event', async () => {
    const wrapper = mount(MobileMenu, {
      propsData: {
        isActive: true,
        isBlogActive: false,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    wrapper.get('nav').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
