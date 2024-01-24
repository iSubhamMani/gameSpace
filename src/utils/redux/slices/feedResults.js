import { createSlice } from "@reduxjs/toolkit";

const feedResults = createSlice({
  name: "feed",
  initialState: {
    results: [],
  },
  reducers: {
    addResults: (state, action) => {
      state.results.push(...action.payload);
    },
  },
});

export const { addResults } = feedResults.actions;
export default feedResults.reducer;
