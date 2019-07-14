import React from 'react'
import PropTypes from 'prop-types'


const Post = ({ onClick, title, id }) => (
  <div className='post'>
    <div className='post-id'>
        <p>{id}</p>
    </div>

    <div className='info-container'>
        <p className='title'>{title}</p>
    </div>
    <div className='button-container'>
        <button onClick={onClick}>Read post</button>
    </div>
  </div>
)

Post.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
}

export default Post
