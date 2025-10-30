import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroPro from "../components/HeroPro/HeroPro";
import NavBar from "../components/NavBar/NavBar";
import Project from "../components/Project/Project";
import Test from "../components/Test/Test";

const ProjectsPage = () => {
  return (
    <div>
      <NavBar />
      <HeroPro />
      <Project />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
