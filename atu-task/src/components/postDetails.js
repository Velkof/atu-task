import React from 'react'
import PropTypes from 'prop-types'

class PostDetails extends React.Component {
  componentDidMount() {
      this.props.getPostDetails(this.props.match.params.id);
  }

  render() {
      const { loading, selectedPost: { title, body }, selectedPostAuthor: { name } } = this.props;

      if (loading) {
          return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
      }

      return (
        <div className="post-details">
            <div className='wrapper'>
                <div className='title'>
                    <span>{title}</span>
                </div>
                <p className='description'>
                    {body}
                </p>
                <p className='subtitle'>
                    Authored by: {name}
                </p>
                <div className='button-container'>
                    <button onClick={() => window.location.assign('/')}>Back</button>
                </div>
            </div>
        </div>
      )
   }
}

PostDetails.propTypes = {
    loading: PropTypes.bool.isRequired,
    selectedPost: PropTypes.object.isRequired,
    selectedPostAuthor: PropTypes.object.isRequired
}

export default PostDetails
