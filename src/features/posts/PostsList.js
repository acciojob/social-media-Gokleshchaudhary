import React from "react";
import { useSelector } from "react-redux";
import ReactionButtons from "../../components/ReactionButtons"; // ✅ yahan import karo

function PostsList() {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="posts-list">
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <ReactionButtons post={post} /> {/* ✅ yahan use karo */}
        </article>
      ))}
    </section>
  );
}

export default PostsList;
