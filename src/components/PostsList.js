// src/features/posts/PostsList.js
import React from 'react';

const PostsList = () => {
  return (
    <section className="posts-list">
      <div className="post">
        <h3>Sample Post</h3>
        <p>This is a sample post content.</p>
        <div>
          <button>👍</button>
          <button>❤️</button>
          <button>😂</button>
          <button>😢</button>
          <button>😡</button>
        </div>
        <button className="button">Edit</button>
      </div>
    </section>
  );
};

export default PostsList;
