// @ts-ignore
import PrismicVue from '@prismicio/vue';
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import PostPreview from '~/components/Shared/PostPreview.vue';
import { mockPost } from '~/__mocks__/post';
import htmlSerializer from '~/plugins/html-serializer';

const localVue = createLocalVue();
localVue.use(PrismicVue, { htmlSerializer });

describe('PostPreview Component', () => {
  it('will render the correct markup', () => {
    const wrapper = mount(PostPreview, {
      localVue,
      propsData: {
        post: mockPost,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    expect(wrapper.get('h3').text()).toEqual('heading1');
    const spanElements = wrapper.findAll('span');
    expect(spanElements.at(0).text()).toEqual('January 1, 2020');
    expect(spanElements.at(1).text()).toEqual('Tutorial');
    const summary = wrapper.get('.post-preview-body');
    expect(summary.findAll('p').length).toEqual(1);
    expect(summary.get('p').text()).toEqual('summary');
  });
});
