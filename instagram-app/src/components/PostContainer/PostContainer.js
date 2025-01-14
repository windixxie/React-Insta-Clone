import React from 'react';
import '../Post/Post.css';
import Post from '../Post/Post';

const PostContainer = props => {
  return(
    <div className="post_container">
      {props.data.map((data, index) =>(
        <Post
         key={index}
         data={data} />
      ))}
    </div>
  )
}

export default PostContainer;