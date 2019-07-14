import { connect } from 'react-redux'
import PostDetails from '../components/postDetails'
import { fetchPostDetails } from '../actions/index';

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  selectedPost: state.posts.selectedPost,
  selectedPostAuthor: state.posts.selectedPostAuthor
})

const mapDispatchToProps = dispatch => {
    return {
        getPostDetails: id => dispatch(fetchPostDetails(id)),
    }
  }
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)