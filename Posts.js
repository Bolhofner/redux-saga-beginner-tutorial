/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';
import { getPost } from './sagas';

const Posts = ({ post, getPost }) =>
      <div>
        <div>
        <button onClick={getPost}>
          get post
        </button>
        <li>
          Post is: {post}
        </li>
        </div>
      </div>

Posts.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Posts