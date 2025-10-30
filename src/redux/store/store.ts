import { configureStore } from "@reduxjs/toolkit";
import resonsSlice from "../slices/resonsSlice";
import serviceSlice from "../slices/serviceSlice";
import testimonialSlice from "../slices/testimonialSlice";
import faqSlice from "../slices/faqSlice";
import projectSlice from "../slices/projectSlice";
export const store = configureStore({
  reducer: {
    resons: resonsSlice,
    service: serviceSlice,
    testimonial: testimonialSlice,
    faq: faqSlice,
    pro: projectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
