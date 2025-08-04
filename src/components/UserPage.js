import React from 'react';
import { useParams } from 'react-router-dom';
import { postsState } from '../data/posts';
import { useSyncExternalStore } from 'use-sync-external-store';

export default function UserPage() {
  const { userId } = useParams();
  const posts = useSyncExternalStore(postsState.subscribe, postsState.get);
  const userPosts = posts.filter(p => p.authorId === Number(userId));
  return (
    <div>
      {userPosts.map(p => (
        <div key={p.id} className="post">
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  );
}

