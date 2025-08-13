import { createSlice, nanoid } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    notificationsReceived: {
      reducer(state, action) {
        state.push(...action.payload);
      },
      prepare() {
        return {
          payload: [
            { id: nanoid(), message: 'New post added!' },
            { id: nanoid(), message: 'User liked a post!' }
          ]
        };
      }
    }
  }
});

export const { notificationsReceived } = notificationsSlice.actions;
export default notificationsSlice.reducer;

