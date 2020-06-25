import { usePost } from '~/composables/usePost';
import { mockPost } from '~/__mocks__/post';

describe('usePost', () => {
  it('will return the wpPublicationDate if there is one', () => {
    const { formattedDate } = usePost(mockPost);

    expect(formattedDate.value).toEqual('January 1, 2020');
  });

  it('will return the prismicPublicationDate if there is no wpPublicationDate', () => {
    delete mockPost.node.wppublicationdate;
    const { formattedDate } = usePost(mockPost);

    expect(formattedDate.value).toEqual('January 2, 2020');
  });

  it('can format the uid to a slug', () => {
    const { slug } = usePost(mockPost);

    expect(slug.value).toEqual('/blog/uid');
  });

  it('can format the body', () => {
    const { formattedBody } = usePost(mockPost);

    expect(formattedBody.value).toHaveLength(2);
    expect(formattedBody.value[0][0].text).toEqual('paragraph1');
    expect(formattedBody.value[0][1].text).toEqual('paragraph2');
    expect(formattedBody.value[1][0].text).toEqual('codeBlock');
  });
});
