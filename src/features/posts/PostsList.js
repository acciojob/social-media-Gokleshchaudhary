import React from 'react'

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <ReactionButtons post={post} />
          <Link to={`/posts/${post.id}`} className="button">
            View Post
          </Link>
        </article>
      ))}
    </section>
  );
};
export default PostsList;
