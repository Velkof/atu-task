import { connect } from 'react-redux'
import PostList from '../components/postList'
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
})

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(fetchPosts()),
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)