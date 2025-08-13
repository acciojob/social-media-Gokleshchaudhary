import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { reactionAdded } from './postsSlice';

export default function PostsList() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const reactionEmoji = { thumbsUp: '👍', hooray: '🎉', heart: '❤️', rocket: '🚀', eyes: '👀' };

  return (
    <section className="posts-list">
      {posts.map(post => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {Object.entries(reactionEmoji).map(([name, emoji]) => (
            <button key={name} onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
              {emoji} {post.reactions[name]}
            </button>
          ))}
          <Link to={`/posts/${post.id}`} className="button">View Post</Link>
        </article>
      ))}
    </section>
  );
}

