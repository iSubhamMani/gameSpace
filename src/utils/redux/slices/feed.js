import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
  name: "feed",
  initialState: {
    results: [],
    pageNumber: 1,
    hasFeedCache: false,
  },
  reducers: {
    addResults: (state, action) => {
      state.results.push(...action.payload);
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    updatePageNumber: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setHasFeedCache: (state, action) => {
      state.hasFeedCache = action.payload;
    },
  },
});

export const {
  addResults,
  updatePageNumber,
  setPageNumber,
  setHasFeedCache,
  setResults,
} = feed.actions;
export default feed.reducer;
