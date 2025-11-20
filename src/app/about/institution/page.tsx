import PageHeroSection from "@/app/components/PageHeroSection";
import React from "react";
import AboutInstitution from "./aboutInstitution";

const instituteDescription = [
  "Our Ayurveda College & Hospital is committed to preserving the ancient wisdom of Ayurveda while integrating modern medical practices. With a strong academic foundation and exceptional clinical exposure, we aim to develop skilled Ayurvedic professionals capable of making meaningful contributions to healthcare.",
  "Our institution focuses on patient-centric healing, research-driven learning, and a holistic approach to wellness. We strive to maintain the highest standards in education, treatment, and community service.",
];

const page = () => {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Green hero image background"
        title="About Ayurveda College, Hospital and Research Centre"
        description="Learn more about our institution, our values, and our journey."
      />
      <AboutInstitution
        data={instituteDescription}
        instituteImage="/images/ayurveda_aboutus_medium_banner.png"
        altText="institute image"
      />
    </>
  );
};

export default page;
