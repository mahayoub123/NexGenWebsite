import ContactForm from "../components/ContactForm/ContactForm";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroContact from "../components/HeroContact/HeroContact";
import NavBar from "../components/NavBar/NavBar";
import Test from "../components/Test/Test";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <HeroContact />
      <ContactForm />
      <Test />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ContactPage;
