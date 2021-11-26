import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "./cryptoApi";
import cryptoNws from "./cryptoNws";
import cryptoExchng from "./cryptoExchng";
export const store = configureStore({
  reducer: { cryptoApi, cryptoNws, cryptoExchng },
});
