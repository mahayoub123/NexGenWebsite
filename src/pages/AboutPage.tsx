import Achievment from "../components/Achievment/Achievment";
import Award from "../components/Award/Award";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import Meet from "../components/Meet/Meet";
import NavBar from "../components/NavBar/NavBar";
import Test from "../components/Test/Test";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <HeroAbout />
      <Meet />
      <Achievment />
      <Award />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutPage;
