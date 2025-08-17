import { createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: "1",
      title: "First Post!",
      content: "Hello!",
      user: "1",
      reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
    },
    {
      id: "2",
      title: "Second Post",
      content: "More text",
      user: "2",
      reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
    },
  ],
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, user) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existing = state.find((p) => p.id === id);
      if (existing) {
        existing.title = title;
        existing.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existing = state.find((p) => p.id === postId);
      if (existing) {
        existing.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
