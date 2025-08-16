import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello world!",
    user: "1",
    reactions: { thumbsUp: 0, heart: 0, laugh: 0, wow: 0, nope: 0 },
  },
  {
    id: "2",
    title: "Second Post",
    content: "More content here...",
    user: "2",
    reactions: { thumbsUp: 0, heart: 0, laugh: 0, wow: 0, nope: 0 },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            reactions: { thumbsUp: 0, heart: 0, laugh: 0, wow: 0, nope: 0 },
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost && reaction !== "nope") {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
