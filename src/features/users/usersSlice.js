import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    { id: "1", name: "User One" },
    { id: "2", name: "User Two" },
    { id: "3", name: "User Three" },
  ],
  reducers: {},
});

export default usersSlice.reducer;
