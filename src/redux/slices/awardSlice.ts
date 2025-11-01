import { createSlice } from "@reduxjs/toolkit";
import awIcon from "../../assets/images/awIcon.svg";
export interface Award {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Award[] = [
  {
    id: 1,
    title: "Digital Excellence Award",
    img: awIcon,
    desc: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
  },
  {
    id: 2,
    title: "Top Mobile App Development Agency",
    img: awIcon,
    desc: "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.",
  },
  {
    id: 3,
    title: "Best Digital Marketing Campaign",
    img: awIcon,
    desc: "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.",
  },
  {
    id: 4,
    title: "Innovative Tech Startup Award",
    img: awIcon,
    desc: "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space.",
  },
];

const awardSlice = createSlice({
  name: "award",
  initialState,
  reducers: {},
});

export default awardSlice.reducer;
