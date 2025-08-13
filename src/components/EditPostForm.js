import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUpdated } from './postsSlice';

export default function EditPostForm() {
  const { postId } = useParams();
  const post = useSelector(state => state.posts.find(p => p.id === postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  const onSavePostClicked = () => {
    dispatch(postUpdated({ id: postId, title, content }));
    navigate(`/posts/${postId}`);
  };

  if (!post) return <section><h2>Post not found!</h2></section>;

  return (
    <section>
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={onSavePostClicked}>Save Post</button>
    </section>
  );
}

