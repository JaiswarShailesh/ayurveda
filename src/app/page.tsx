import AboutSection from "./components/AboutUsSection";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Departments from "./components/OurDepartmentsSection";
import FacultySection from "./components/OurExpertsSection";
import NoticeRunner from "./components/RunnerNotice";
import Testimonials from "./components/Testimonials";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";

const notices = [
  "Admissions open for BAMS – Apply now!",
  "Hospital OPD timing updated: 9 AM to 4 PM.",
  "Ayurveda workshop scheduled on 20th Jan.",
  "Internship circular for final-year students released.",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <NoticeRunner notices={notices} />
      <AboutSection />
      <WhyChooseUs />
      <Departments />
      <FacultySection />
      {/* <HospitalServices /> */}
      <Treatments />
      <Testimonials />
      <Gallery />
      <ContactUs />
    </>
  );
}
