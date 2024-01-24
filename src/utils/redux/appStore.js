import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import feedResults from "./slices/feedResults";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedResults,
  },
});

export default appStore;
