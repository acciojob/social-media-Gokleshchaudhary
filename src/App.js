import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import NotificationsList from "./features/notifications/NotificationsList";

function Navbar() {
  return (
    <nav>
      <a href="/">Posts</a> | <a href="/users">Users</a> |{" "}
      <a href="/notifications">Notifications</a>
    </nav>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>
      <Router>
        <Navbar />
        <AddPostForm />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/notifications" element={<NotificationsList />} />
        </Routes>
      </Router>
    </div>
  );
}
