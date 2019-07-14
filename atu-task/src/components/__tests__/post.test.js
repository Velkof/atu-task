import React from 'react';
import renderer from 'react-test-renderer';
import Post from '../post';

const post = {
    id: 1,
    title: 'Post title',
    userId: 2,
    body: 'Post body'
}

test('<Post /> renders successfully', () => {
  const tree = renderer.create(
    <Post
        key={post.id}
        {...post}
        onClick={() => {}}
    />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});
