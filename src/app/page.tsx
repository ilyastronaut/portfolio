import ProfileSection from "@/components/profile-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";

export default function Home() {
  return (
    <div className="flex justify-center gap-16">
      <div className="max-w-3xs w-full">
        <ProfileSection />
      </div>
      <div className="flex flex-col gap-8 max-w-3xl w-full">
        <AboutSection />
        <ExperienceSection />
      </div>
    </div>
  );
}
