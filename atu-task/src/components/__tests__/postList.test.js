import React from 'react';
import renderer from 'react-test-renderer';
import PostList from '../postList';

const props = {
    loading: false,
    posts: [{
        id: 1,
        title: 'Post title',
        userId: 2,
        body: 'Post body'
    },
    {
        id: 2,
        title: 'Post title 2',
        userId: 3,
        body: 'Post body 2'
    }],
    getPosts: () => {}
}

test('<PostList /> renders successfully', () => {
  const tree = renderer.create(
    <PostList
        {...props}
    />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});
