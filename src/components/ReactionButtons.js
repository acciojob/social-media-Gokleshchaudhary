import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postsSlice"; // ✅ सही path

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
}

export default ReactionButtons;
