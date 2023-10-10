import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    usersList: ["Aditya", "Dishant"],
  },
  reducers: {
    addUser: (state, action) => {
      state.usersList.push(action.payload);
    },
    getUsers: (state, action) => {
      return state.usersList;
    },
  },
});

export const { addUser, getUsers } = userSlice.actions;
export default userSlice.reducer;
