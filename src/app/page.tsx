import AboutSection from "./components/AboutUsSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import HospitalServices from "./components/HospitalServices";
import Departments from "./components/OurDepartmentsSection";
import FacultySection from "./components/OurExpertsSection";
import Testimonials from "./components/Testimonials";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <Departments />
      <FacultySection />
      {/* <HospitalServices /> */}
      <Treatments />
      <Testimonials />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}
