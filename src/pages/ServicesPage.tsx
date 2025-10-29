import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Service from "../components/Service/Service";
import Test from "../components/Test/Test";

const ServicesPage = () => {
  return (
    <div>
      <NavBar />
      <Service />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ServicesPage;
