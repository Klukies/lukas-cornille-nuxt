import { shallowMount } from '@vue/test-utils';
import Hero from '~/components/Home/Hero.vue';

describe('Hero Component', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(Hero);

    expect(wrapper.get('h1').text()).toEqual("I'm Lukas Cornille");
    expect(wrapper.get('h2').text()).toEqual('Full Stack Developer');
    expect(wrapper.get('socials-stub')).toBeDefined();
  });
});
