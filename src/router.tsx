import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import BlogsOpenPage from "./pages/BlogsOpenPage";
import CareersPage from "./pages/CareersPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/ser",
    element: <ServicesPage />,
  },
  {
    path: "/careers",
    element: <CareersPage />,
  },
  {
    path: "/blog",
    element: <BlogsPage />,
  },
  {
    path: "/open",
    element: <BlogsOpenPage />,
  },
  {
    path: "/pro",
    element: <ProjectsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
