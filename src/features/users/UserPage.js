import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserPage({ match }) {
  const { userId } = match.params;

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const postsForUser = useSelector((state) =>
    state.posts.filter((post) => post.user === userId)
  );

  return (
    <section>
      <h2>{user ? user.name : "User not found"}</h2>
      <ul>
        {postsForUser.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserPage;
