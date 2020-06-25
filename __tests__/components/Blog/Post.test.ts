// @ts-ignore
import PrismicVue from '@prismicio/vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Post from '~/components/Blog/Post.vue';
import { mockPost } from '~/__mocks__/post';
import htmlSerializer from '~/plugins/html-serializer';

const localVue = createLocalVue();
localVue.use(PrismicVue, { htmlSerializer });

describe('Post Component', () => {
  it('renders the correct markup', () => {
    const wrapper = mount(Post, {
      localVue,
      propsData: {
        post: mockPost,
      },
      mocks: {
        $md: {
          render(text: string) {
            return text;
          },
        },
      },
    });

    expect(wrapper.get('h1').text()).toEqual('heading1');
    const spanElements = wrapper.findAll('span');
    expect(spanElements.at(0).text()).toEqual('January 1, 2020');
    expect(spanElements.at(1).text()).toEqual('Tutorial');

    const body = wrapper.get('.post-body');
    const bodyText = body.findAll('p');
    const bodyCode = wrapper.get('.code');
    expect(bodyText.at(0).text()).toEqual('paragraph1');
    expect(bodyText.at(1).text()).toEqual('paragraph2');
    expect(bodyCode.text()).toEqual('codeBlock');
  });
});
