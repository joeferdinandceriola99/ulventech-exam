import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      return payload;
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId);
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
