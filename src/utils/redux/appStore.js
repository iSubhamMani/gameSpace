import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import feed from "./slices/feed";
import search from "./slices/search";
import cart from "./slices/cart";
import app from "./slices/app";

const appStore = configureStore({
  reducer: {
    app: app,
    user: userSlice,
    feed: feed,
    search: search,
    cart: cart,
  },
});

export default appStore;
