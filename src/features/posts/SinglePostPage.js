import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactionButtons from "../../components/ReactionButtons"; // ✅ yahan import karo

function SinglePostPage() {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <ReactionButtons post={post} /> {/* ✅ yahan use karo */}
    </article>
  );
}

export default SinglePostPage;
