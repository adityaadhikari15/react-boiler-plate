import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    items: ["Apple", "Banana", "Orange"],
  },
  reducers: {
    addItem: (state, action) => {
      return state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = appSlice.actions;
export default appSlice.reducer;
