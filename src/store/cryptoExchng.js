import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const cryptoExchng = createSlice({
  name: "cryptoExchng",
  initialState,
  reducers: {
    setExchnage: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setExchnage } = cryptoExchng.actions;

export default cryptoExchng.reducer;
