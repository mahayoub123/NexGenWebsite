import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroCareers from "../components/HeroCareers/HeroCareers";
import Join from "../components/Join/Join";
import NavBar from "../components/NavBar/NavBar";
import Test from "../components/Test/Test";

const CareersPage = () => {
  return (
    <div>
      <NavBar />
      <HeroCareers />
      <Join />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default CareersPage;
