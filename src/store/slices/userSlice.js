import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    usersList: ["Aditya", "Dishant"],
  },
  reducers: {
    addUser: (state, action) => {
      state.usersList = [action.payload, ...state.usersList];
    },
    getUsers: (state, action) => {
      return state.usersList;
    },
    allUsers: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { addUser, getUsers, allUsers } = userSlice.actions;
export default userSlice.reducer;
