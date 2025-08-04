import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { postsState } from '../data/posts';
import { useSyncExternalStore } from 'use-sync-external-store';

export default function SinglePostPage() {
  const { postId } = useParams();
  const posts = useSyncExternalStore(postsState.subscribe, postsState.get);
  const post = posts.find(p => p.id === Number(postId));
  if (!post) return <p>Post not found</p>;
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button className="button"><Link to={`/edit/${post.id}`}>Edit</Link></button>
    </div>
  );
}

