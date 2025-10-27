import { createSlice } from "@reduxjs/toolkit";
import cardIcon1 from "../../assets/images/Button.svg";

export interface Resons {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Resons[] = [
  {
    id: 1,
    title: "Expertise in Cutting-Edge Technologies",
    img: cardIcon1,
    desc: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing...",
  },
  {
    id: 2,
    title: "Proven Track Record of Success",
    img: cardIcon1,
    desc: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable...",
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    img: cardIcon1,
    desc: "At NexGen, we prioritize understanding our clients' unique requirements, fostering ...",
  },
  {
    id: 4,
    title: "Dedicated Team of Professionals",
    img: cardIcon1,
    desc: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable...",
  },
];

const resonsSlice = createSlice({
  name: "resons",
  initialState,
  reducers: {},
});

export default resonsSlice.reducer;
