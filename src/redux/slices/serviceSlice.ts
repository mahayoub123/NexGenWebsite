import { createSlice } from "@reduxjs/toolkit";
import cardIcon1 from "../../assets/images/Button.svg";
import ser1 from "../../assets/images/ser1.svg";
import ser2 from "../../assets/images/ser2.svg";
import ser3 from "../../assets/images/ser3.svg";
import ser4 from "../../assets/images/ser4.svg";
export interface Service {
  id: number;
  title: string;
  desc: string;
  img: string;
  imag2: string;
  desc2: string;
}

const initialState: Service[] = [
  {
    id: 1,
    title: "Web Design",
    img: cardIcon1,
    imag2: ser1,
    desc2: "Starts From $1,500",
    desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    img: cardIcon1,
    imag2: ser2,
    desc2: "Starts From $2,500",
    desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications .",
  },
  {
    id: 3,
    title: "Web Development",
    img: cardIcon1,
    imag2: ser3,
    desc2: "Starts From $1,500",
    desc: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    img: cardIcon1,
    imag2: ser4,
    desc2: "Starts From $1,500",
    desc: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility",
  },
];

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
});

export default serviceSlice.reducer;
