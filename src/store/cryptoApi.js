import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const cryptoApi = createSlice({
  name: "cryptoApi",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setData } = cryptoApi.actions;

export default cryptoApi.reducer;
