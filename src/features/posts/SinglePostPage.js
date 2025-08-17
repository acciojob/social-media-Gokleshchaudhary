import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SinglePostPage() {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === postId));
  const navigate = useNavigate();

  if (!post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );

  return (
    <section className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button
        className="button"
        onClick={() => navigate(`/editPost/${post.id}`)}
      >
        Edit
      </button>
    </section>
  );
}
