import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import feedResults from "./slices/feedResults";
import search from "./slices/search";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedResults,
    search: search,
  },
});

export default appStore;
