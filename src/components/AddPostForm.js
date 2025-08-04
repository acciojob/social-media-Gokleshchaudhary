import React, { useState } from 'react';
import { listUsers } from '../data/users';
import { postsState, addPost } from '../data/posts';

export default function AddPostForm() {
  const [authorId, setAuthorId] = useState('');
  const [content, setContent] = useState('');
  const users = listUsers();

  const canSave = authorId && content.trim();

  const onSave = (e) => {
    e.preventDefault();
    if (canSave) {
      addPost(authorId, content);
      setContent('');
    }
  };

  return (
    <form>
      <select id="postAuthor" value={authorId} onChange={e => setAuthorId(e.target.value)}>
        <option value="">Select Author</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={onSave}>Submit</button>
    </form>
  );
}

