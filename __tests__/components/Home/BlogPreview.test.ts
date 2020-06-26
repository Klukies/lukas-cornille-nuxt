import { shallowMount } from '@vue/test-utils';
import { Post } from '../../../graphql/types';
import { mockPost } from '~/__mocks__/post';
import BlogPreview from '~/components/Home/BlogPreview.vue';

describe('BlogPreview Component', () => {
  it('renders the correct markup', () => {
    const posts: Post[] = [mockPost, mockPost];
    const wrapper = shallowMount(BlogPreview, {
      propsData: {
        posts,
      },
    });

    expect(wrapper.get('h2').text()).toEqual('New posts');
    expect(wrapper.findAll('postpreview-stub').length).toEqual(2);
  });
});
