import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';
import SinglePostPage from './components/SinglePostPage';
import EditPostForm from './components/EditPostForm';
import UsersList from './components/UsersList';
import UserPage from './components/UserPage';
import NotificationsList from './components/NotificationsList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <a href="/">Posts</a> | <a href="/users">Users</a> | <a href="/notifications">Notifications</a>
        </nav>
        <AddPostForm />
        <PostsList />
        <Routes>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/edit/:postId" element={<EditPostForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/notifications" element={<NotificationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
