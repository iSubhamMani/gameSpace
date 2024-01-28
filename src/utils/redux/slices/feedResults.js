import { createSlice } from "@reduxjs/toolkit";

const feedResults = createSlice({
  name: "feed",
  initialState: {
    results: [],
    pageNumber: 1,
    nextPage: true,
  },
  reducers: {
    addResults: (state, action) => {
      state.results.push(...action.payload);
    },
    updatePageNumber: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    setNextPage: (state, action) => {
      state.nextPage = action.payload;
    },
  },
});

export const { addResults, updatePageNumber, setNextPage } =
  feedResults.actions;
export default feedResults.reducer;
