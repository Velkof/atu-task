import React from 'react'
import PropTypes from 'prop-types'
import Post from './post'

class PostList extends React.Component {
  componentDidMount() {
      this.props.getPosts()
  }

  render() {
      const { loading, posts } = this.props;

      if (loading) {
        return (
          <div className="loading">
              <h1>Loading...</h1>
          </div>
        )
      }

      return (
        <div className='post-list'>
                <h1>Posts List</h1>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        {...post}
                        onClick={() => window.location.assign(`/post/${post.id}`)}
                    />
                )}
        </div>
      )
   }
}

PostList.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default PostList
