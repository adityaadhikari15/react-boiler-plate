// import { configureStore } from "@reduxjs/toolkit";
// import appSliceReducer from "./slices/appSlice";

// const appStore = configureStore({
//   reducer: {
//     appReducer: appSliceReducer,
//   },
// });

// export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";

const appStore = configureStore({
  reducer: { user: usersReducer },
});

export default appStore;
