import { configureStore } from "@reduxjs/toolkit";
import resonsSlice from "../slices/resonsSlice";
export const store = configureStore({
  reducer: {
    resons: resonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
