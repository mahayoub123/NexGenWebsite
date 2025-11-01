import { createSlice } from "@reduxjs/toolkit";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";
export interface Meet {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Meet[] = [
  {
    id: 1,
    title: "John Smith",
    img: about1,
    desc: "Co-Founder & CEO",
  },
  {
    id: 2,
    title: "Sarah Adams",
    img: about2,
    desc: "Head of Design",
  },
  {
    id: 3,
    title: "Emily Johnson",
    img: about3,
    desc: "Lead Web Developer",
  },
  {
    id: 4,
    title: "William Lee",
    img: about4,
    desc: "Lead Backend Developer",
  },
];

const meetSlice = createSlice({
  name: "meet",
  initialState,
  reducers: {},
});

export default meetSlice.reducer;
