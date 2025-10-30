import { createSlice } from "@reduxjs/toolkit";
import pIcon1 from "../../assets/images/pIcon1.svg";
import pIcon2 from "../../assets/images/pIcon2.svg";
import pIcon3 from "../../assets/images/pIcon3.svg";
import pIcon4 from "../../assets/images/pIcon4.svg";
export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Project[] = [
  {
    id: 1,
    title: "Strategic Planning",
    img: pIcon1,
    desc: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives.",
  },
  {
    id: 2,
    title: "Customized Solutions",
    img: pIcon2,
    desc: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions.",
  },
  {
    id: 3,
    title: "User-Centric Approach",
    img: pIcon3,
    desc: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
  },
  {
    id: 4,
    title: "Timely Delivery",
    img: pIcon4,
    desc: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
  },
];

const projectSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
