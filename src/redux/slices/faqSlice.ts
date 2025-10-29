import { createSlice } from "@reduxjs/toolkit";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const initialState: FAQ[] = [
  {
    id: 1,
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 2,
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 3,
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 4,
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    id: 5,
    question: "What is your approach to user experience (UX) design?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
];

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
});

export default faqSlice.reducer;
