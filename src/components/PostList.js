import React from 'react';
import { useSelector } from 'react-redux';

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;

