// @ts-ignore
import PrismicVue from '@prismicio/vue';
import { mount, createLocalVue } from '@vue/test-utils';
import { mockTabs } from '../../../__mocks__/tab';
import htmlSerializer from '../../../plugins/html-serializer';
import About from '~/components/Home/About.vue';

const localVue = createLocalVue();
localVue.use(PrismicVue, { htmlSerializer });

describe('About Component', () => {
  it('render the correct markup', () => {
    const wrapper = mount(About, {
      localVue,
      propsData: {
        tabs: mockTabs,
      },
      directives: {
        lazyLoad: {},
      },
    });

    expect(wrapper.get('h2').text()).toEqual('About Me');
    expect(wrapper.findAll('.ant-tabs-tab').length).toEqual(2);
    expect(wrapper.findAll('.ant-tabs-tabpane').length).toEqual(2);
    expect(wrapper.get('h3').text()).toEqual('heading1');
    expect(wrapper.get('p').text()).toEqual('paragraph1');
  });

  it('can switch between tabs', async () => {
    const wrapper = mount(About, {
      localVue,
      propsData: {
        tabs: mockTabs,
      },
      directives: {
        lazyLoad: {},
      },
    });

    expect(wrapper.get('h2').text()).toEqual('About Me');
    expect(wrapper.findAll('.ant-tabs-tab').length).toEqual(2);
    expect(wrapper.findAll('.ant-tabs-tabpane').length).toEqual(2);
    expect(wrapper.get('h3').text()).toEqual('heading1');
    expect(wrapper.get('p').text()).toEqual('paragraph1');

    wrapper.vm.$data.activeTab = 'Skills';
    await wrapper.vm.$nextTick();
    const activeTab = wrapper.get('.ant-tabs-tabpane-active');
    expect(activeTab.get('h3').text()).toEqual('heading2');
    expect(activeTab.get('p').text()).toEqual('paragraph2');
  });
});
