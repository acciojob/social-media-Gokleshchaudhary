

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === postId));

  if (!post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </article>
  );
};
export default SinglePostPage;
