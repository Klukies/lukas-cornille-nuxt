import { mount, RouterLinkStub } from '@vue/test-utils';
import Header from '~/components/Header/Header.vue';

describe('Header Component', () => {
  it('will emit the toggleMenu event', async () => {
    const wrapper = mount(Header, {
      propsData: {
        isMenuActive: true,
        isBlogActive: true,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    wrapper.get('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().toggleMenu).toBeTruthy();
  });
});
