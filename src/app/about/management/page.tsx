import PageHeroSection from "@/app/components/PageHeroSection";
import ManagementSection from "./ManagementSection";

const managementMembers = [
  {
    name: "Person 1",
    role: "President",
    image: "/images/president.jpg",
  },
  {
    name: "Person 2",
    role: "Vice President",
    image: "/images/male_user.png",
  },
  {
    name: "Person 3",
    role: "Hon. Secretary",
    image: "/images/male_user.png",
  },
  {
    name: "Person 4",
    role: "Joint Secretary",
    image: "/images/male_user.png",
  },
  {
    name: "Person 5",
    role: "Treasurer",
    image: "/images/male_user.png",
  },
];

export default function Page() {
  return (
    <>
      <PageHeroSection
        imgUrl="/images/ayurveda_page_banner.png"
        altText="Management team banner"
        title="Management Team"
        description="Meet the dedicated leadership guiding our institution’s vision and growth."
      />

      <ManagementSection members={managementMembers} />
    </>
  );
}
