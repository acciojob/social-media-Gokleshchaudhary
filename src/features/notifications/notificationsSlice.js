import { createSlice, nanoid } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    notificationAdded(state, action) {
      state.push({ id: nanoid(), message: action.payload });
    },
  },
});

export const { notificationAdded } = notificationsSlice.actions;
export default notificationsSlice.reducer;
