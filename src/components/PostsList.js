import React from 'react';
import { Link } from 'react-router-dom';
import { postsState, addReaction } from '../data/posts';
import { useSyncExternalStore } from 'use-sync-external-store';

export default function PostsList() {
  const posts = useSyncExternalStore(postsState.subscribe, postsState.get);
  return (
    <section className="posts-list">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {[...post.reactions, 0].map((r, idx) => (
            <button key={idx} onClick={() => reactionsControlled(idx, post.id)}>
              {r}
            </button>
          ))}
          <button className="button">
            <Link to={`/posts/${post.id}`}>View</Link>
          </button>
        </div>
      ))}
    </section>
  );

  function reactionsControlled(idx, postId) {
    if (idx < 4) addReaction(postId, idx);
  }
}
