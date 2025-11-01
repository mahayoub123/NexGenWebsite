import { configureStore } from "@reduxjs/toolkit";
import resonsSlice from "../slices/resonsSlice";
import serviceSlice from "../slices/serviceSlice";
import testimonialSlice from "../slices/testimonialSlice";
import faqSlice from "../slices/faqSlice";
import projectSlice from "../slices/projectSlice";
import meetSlice from "../slices/meetSlice";
import achSlice from "../slices/achSlice";
import awardSlice from "../slices/awardSlice";
import joinSlice from "../slices/joinSlice";

export const store = configureStore({
  reducer: {
    resons: resonsSlice,
    service: serviceSlice,
    testimonial: testimonialSlice,
    faq: faqSlice,
    pro: projectSlice,
    meet: meetSlice,
    ach: achSlice,
    award: awardSlice,
    join: joinSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
