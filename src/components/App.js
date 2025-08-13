import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import PostList from './PostList';
import AddPost from './AddPost';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/add" component={AddPost} />
      </Switch>
    </div>
  );
}

export default App;
