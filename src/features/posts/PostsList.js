import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactionButtons from "../../components/ReactionButtons";

export default function PostsList() {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>by {users.find((u) => u.id === post.user)?.name}</p>
          <ReactionButtons post={post} />
          <Link to={`/posts/${post.id}`} className="button">
            View Post
          </Link>
        </article>
      ))}
    </section>
  );
}
