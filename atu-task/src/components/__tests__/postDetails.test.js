import React from 'react';
import renderer from 'react-test-renderer';
import PostDetails from '../postDetails';

const props = {
    loading: false,
    selectedPost: {
        id: 1,
        title: 'Post title',
        userId: 2,
        body: 'Post body'
    },
    selectedPostAuthor: {
        name: 'Author name'
    },
    match: {
        params: {
            id: 1
        }
    },
    getPostDetails: () => {}
}

test('<PostDetails /> renders successfully', () => {
  const tree = renderer.create(
    <PostDetails
        {...props}
    />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});
