import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import feed from "./slices/feed";
import search from "./slices/search";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feed,
    search: search,
  },
});

export default appStore;
