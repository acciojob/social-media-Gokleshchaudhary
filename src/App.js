import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import NotificationsList from "./features/notifications/NotificationsList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <a href="/">Posts</a> | <a href="/users">Users</a> |{" "}
          <a href="/notifications">Notifications</a>
        </nav>

        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />
        </Switch>

        <AddPostForm />
      </div>
    </Router>
  );
}

export default App;
