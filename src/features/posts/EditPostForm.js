import React from 'react';


import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postUpdated } from "./postsSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === postId));
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

  if (!post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );

  return (
    <section className="post">
      <h2>Edit Post</h2>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button" onClick={onSave}>
        Save Post
      </button>
    </section>
  );
};
export default EditPostForm;
