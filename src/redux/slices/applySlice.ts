import { createSlice } from "@reduxjs/toolkit";
export interface Apply {
  id: number;
  title: string;
  desc: string;
}

const initialState: Apply[] = [
  {
    id: 1,
    title: "Explore Job Listings",
    desc: "Visit our website's Careers page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.",
  },
  {
    id: 2,
    title: "Review Job Description",
    desc: "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.",
  },
  {
    id: 3,
    title: "Prepare Your Application",
    desc: "Before applying, ensure you have the following ready",
  },
  {
    id: 4,
    title: "Complete the Application",
    desc: "Click the Apply Now button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for.",
  },
  {
    id: 5,
    title: "Upload Your Documents",
    desc: "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.",
  },
  {
    id: 6,
    title: "Submit Your Application",
    desc: "Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the Submit button to send it to our HR team.",
  },
  {
    id: 7,
    title: "Application Review",
    desc: "After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments.",
  },
  {
    id: 8,
    title: "Interview Process",
    desc: "If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.",
  },
];

const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {},
});

export default applySlice.reducer;
