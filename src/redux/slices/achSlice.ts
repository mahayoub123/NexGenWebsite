import { createSlice } from "@reduxjs/toolkit";

export interface Ach {
  id: number;
  title: string;
  desc: string;
}

const initialState: Ach[] = [
  {
    id: 1,
    title: "Global Recognition for Innovation",
    desc: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
  },
  {
    id: 2,
    title: "Industry Leadership Acknowledged",
    desc: "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.",
  },
  {
    id: 3,
    title: "Expansion into International Markets",
    desc: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.",
  },
  {
    id: 4,
    title: "Pioneering the Digital Frontier",
    desc: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.",
  },
];

const achSlice = createSlice({
  name: "ach",
  initialState,
  reducers: {},
});

export default achSlice.reducer;
