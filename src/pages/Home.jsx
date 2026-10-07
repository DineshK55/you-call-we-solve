import Hero from "../components/Hero";
import Services from "../components/Services";
import WorksSection from "../components/WorksSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials/Testimonials";
import ExperienceStats from "../components/ExperienceStats/ExperienceStats";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ExperienceStats />
      <WorksSection />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;