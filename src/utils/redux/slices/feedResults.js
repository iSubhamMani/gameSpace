import { createSlice } from "@reduxjs/toolkit";

const feedResults = createSlice({
  name: "feed",
  initialState: {
    results: [],
    pageNumber: 1,
    hasMore: false,
  },
  reducers: {
    addResults: (state, action) => {
      state.results.push(...action.payload);
    },
    updatePageNumber: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const { addResults, updatePageNumber, setHasMore } = feedResults.actions;
export default feedResults.reducer;
