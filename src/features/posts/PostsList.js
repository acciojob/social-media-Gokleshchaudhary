import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactionButtons from "../../components/ReactionButtons";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="posts-list">
      {posts.map((post) => (
        <article className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <ReactionButtons post={post} />
          <Link to={`/posts/${post.id}`}>
            <button className="button">View Post</button>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default PostsList;
