import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'User One' },
  { id: '2', name: 'User Two' },
  { id: '3', name: 'User Three' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = state => state.users;
export default usersSlice.reducer;

