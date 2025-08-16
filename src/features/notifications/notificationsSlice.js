import React from 'react'

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notificationsReceived(state) {
      state.push({ id: nanoid(), message: `Notification ${state.length + 1}` });
    },
  },
});

export const { notificationsReceived } = notificationsSlice.actions;
export default notificationsSlice.reducer;
