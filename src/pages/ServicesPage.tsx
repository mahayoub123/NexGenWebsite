import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroSer from "../components/HeroSer/HeroSer";
import NavBar from "../components/NavBar/NavBar";
import Service from "../components/Service/Service";
import Test from "../components/Test/Test";

const ServicesPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSer />
      <Service />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ServicesPage;
