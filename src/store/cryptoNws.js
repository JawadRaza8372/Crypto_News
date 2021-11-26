import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: null,
};

export const cryptoNws = createSlice({
  name: "cryptoNws",
  initialState,
  reducers: {
    setNews: (state, action) => {
      if (action.payload.news === null) {
        state.news = null;
      } else {
        state.news = action.payload.news;
      }
    },
  },
});

export const { setNews } = cryptoNws.actions;

export default cryptoNws.reducer;
