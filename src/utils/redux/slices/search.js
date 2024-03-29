import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    pageNumber: 1,
    searchResults: [],
    hasSearchCache: false,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addSearchResults: (state, action) => {
      state.searchResults.push(...action.payload);
    },
    setHasSearchCache: (state, action) => {
      state.hasSearchCache = action.payload;
    },
    updatePageNumber: (state) => {
      state.pageNumber = state.pageNumber + 1;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSearchResults,
  addSearchResults,
  setHasSearchCache,
  updatePageNumber,
  setPageNumber,
} = search.actions;
export default search.reducer;
