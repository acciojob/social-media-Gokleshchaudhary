import React from "react"; // ✅ ये डालना जरूरी है React 16 में
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import NotificationsList from "./features/notifications/NotificationsList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <Link to="/">Posts</Link> | <Link to="/users">Users</Link> |{" "}
          <Link to="/notifications">Notifications</Link>
        </nav>

        <AddPostForm />

        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
