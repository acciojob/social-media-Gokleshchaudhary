import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

export default function UserPage() {
  const { userId } = useParams();
  const user = useSelector(state => state.users.find(u => u.id === userId));
  const posts = useSelector(state => state.posts.filter(p => p.user === userId));

  return (
    <section>
      <h2>{user?.name}</h2>
      {posts.map(p => (
        <article key={p.id} className="post">
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <Link to={`/posts/${p.id}`} className="button">View Post</Link>
        </article>
      ))}
    </section>
  );
}

