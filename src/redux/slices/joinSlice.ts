import { createSlice } from "@reduxjs/toolkit";
import icon1 from "../../assets/images/c1.svg";
import icon2 from "../../assets/images/c2.svg";
import icon3 from "../../assets/images/c3.svg";
import icon4 from "../../assets/images/c4.svg";
export interface Join {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Join[] = [
  {
    id: 1,
    title: "Web Designer",
    img: icon1,
    desc: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    img: icon2,
    desc: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    img: icon3,
    desc: "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
  },
  {
    id: 4,
    title: "Project Manager",
    img: icon4,
    desc: "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
  },
];

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {},
});

export default joinSlice.reducer;
