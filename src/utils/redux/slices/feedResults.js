import { createSlice } from "@reduxjs/toolkit";

const feedResults = createSlice({
  name: "feed",
  initialState: {
    results: [],
    pageNumber: 1,
    hasMore: false,
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
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    setHasFeedCache: (state, action) => {
      state.hasFeedCache = action.payload;
    },
  },
});

export const {
  addResults,
  updatePageNumber,
  setHasMore,
  setHasFeedCache,
  setResults,
} = feedResults.actions;
export default feedResults.reducer;
