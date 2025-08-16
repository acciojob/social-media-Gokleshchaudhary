import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.users.find((u) => u.id === userId));
  const posts = useSelector((state) =>
    state.posts.filter((p) => p.user === userId)
  );

  return (
    <section>
      <h2>{user?.name}</h2>
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  );
};
export default UserPage;
