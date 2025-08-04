import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postsState, updatePost } from '../data/posts';
import { useSyncExternalStore } from 'use-sync-external-store';

export default function EditPostForm() {
  const { postId } = useParams();
  const posts = useSyncExternalStore(postsState.subscribe, postsState.get);
  const post = posts.find(p => p.id === Number(postId));
  const [content, setContent] = useState(post?.content || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) navigate('/');
  }, [post, navigate]);

  const onSave = () => {
    updatePost(post.id, content);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={onSave}>Save Post</button>
    </div>
  );
}

