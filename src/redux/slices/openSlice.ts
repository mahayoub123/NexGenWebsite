import { createSlice } from "@reduxjs/toolkit";
import open1 from "../../assets/images/open1.png";
import open2 from "../../assets/images/open2.png";
import open3 from "../../assets/images/open3.png";
export interface Open {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Open[] = [
  {
    id: 1,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    img: open1,
    desc: "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
  {
    id: 2,
    title: "Mastering the Art of Minimalistic Design",
    img: open2,
    desc: "Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...",
  },
  {
    id: 3,
    title: "The Psychology of Visual Design in Branding",
    img: open3,
    desc: "Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices...",
  },
];

const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {},
});

export default openSlice.reducer;
