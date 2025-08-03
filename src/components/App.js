import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 🔽 Import your PostsList component here
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <ul>
            <li><a href="/">Posts</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/notifications">Notifications</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PostsList />} />
          {/* Add more routes like /users or /notifications here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
