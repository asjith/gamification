import { configureStore } from "@reduxjs/toolkit";
import rewardModalReducer from "./rewardModalSlice";

const store = configureStore({
  reducer: {
    rewardModal: rewardModalReducer
  }
});

export default store;
