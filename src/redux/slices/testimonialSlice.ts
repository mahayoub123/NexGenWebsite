import { createSlice } from "@reduxjs/toolkit";

import test1 from "../../assets/images/testi1.png";
import test2 from "../../assets/images/testi2.png";
import test3 from "../../assets/images/testi3.png";
import test4 from "../../assets/images/testi4.png";
export interface Test {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Test[] = [
  {
    id: 1,
    title: "NexGen turned our business around!",
    img: test1,
    desc: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
  },
  {
    id: 2,
    title: "NexGen turned our business around!",
    img: test2,
    desc: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
  },
  {
    id: 3,
    title: "Working with NexGen was a pleasure.",
    img: test3,
    desc: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
  },
  {
    id: 4,
    title: "NexGen's web design brought our vision",
    img: test4,
    desc: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
  },
];

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
});

export default testimonialSlice.reducer;
