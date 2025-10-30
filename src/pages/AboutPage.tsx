import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import NavBar from "../components/NavBar/NavBar";
import Test from "../components/Test/Test";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <HeroAbout />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutPage;
