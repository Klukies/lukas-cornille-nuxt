import { mount } from '@vue/test-utils';
import Socials from '~/components/Home/Socials.vue';

describe('Socials Component', () => {
  it('will render the correct markup', () => {
    const wrapper = mount(Socials);

    expect(wrapper.findAll('a').length).toEqual(3);
  });
});
