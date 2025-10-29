import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Resons from "../components/Resons/Resons";
import Service from "../components/Service/Service";
import Test from "../components/Test/Test";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Resons />
      <Service />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
