import { mount, RouterLinkStub } from '@vue/test-utils';
import Navigation from '~/components/Header/Navigation.vue';

describe('Navigation Component', () => {
  it('can render with the blog not active', () => {
    const wrapper = mount(Navigation, {
      propsData: {
        isBlogActive: false,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const blogLink = wrapper.findAll('a').at(1);
    expect(blogLink.classes()).not.toContain('nuxt-link-exact-active');
  });

  it('can render with the blog active', () => {
    const wrapper = mount(Navigation, {
      propsData: {
        isBlogActive: true,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const blogLink = wrapper.findAll('a').at(1);
    expect(blogLink.classes()).toContain('nuxt-link-exact-active');
  });
});
