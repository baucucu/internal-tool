// landing page for the app
// it has a navbar with icon on the left, navigation in the middle, and a mode toggle and get started on the right
// it has a hero section with a title, description, and a button to get started on the left and an image on the right
// it has a footer with a link to the privacy policy and a link to the terms of service on the left, and the navigation component in the middle
import { HeroSection } from "@/components/component/hero-section";
import { FeaturesSection } from "@/components/component/features-section";
import { CaseStudies } from "@/components/component/case-studies";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CaseStudies />
    </main>
  );
}
