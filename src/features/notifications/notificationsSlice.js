import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notificationAdded(state, action) {
      state.push(action.payload);
    },
    allNotificationsRead(state) {
      return state.map((n) => ({ ...n, read: true }));
    },
  },
});

export const { notificationAdded, allNotificationsRead } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
