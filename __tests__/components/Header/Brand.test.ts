import { mount, RouterLinkStub } from '@vue/test-utils';
import Brand from '~/components/Header/Brand.vue';

describe('Brand Component', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(Brand, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    expect(wrapper.text()).toEqual('</>Lukas');
  });
});
