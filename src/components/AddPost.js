import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postsSlice';
import { useHistory } from 'react-router-dom';

const AddPost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addPost(text));
    history.push("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Write something..."
        />
        <button type="submit" style={{ marginLeft: "10px" }}>Add</button>
      </form>
    </div>
  );
};

export default AddPost;

