import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroCareers from "../components/HeroCareers/HeroCareers";
import NavBar from "../components/NavBar/NavBar";
import Test from "../components/Test/Test";

const CareersPage = () => {
  return (
    <div>
      <NavBar />
      <HeroCareers />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default CareersPage;
