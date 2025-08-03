// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';
import NotificationsList from './features/notifications/NotificationsList';

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <a href="/">Posts</a> | <a href="/users">Users</a> | <a href="/notifications">Notifications</a>
        </nav>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/notifications" element={<NotificationsList />} />
        </Routes>
      </div>
    </Router>
  );
}
