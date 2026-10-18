import Hero from "../components/Hero";
import Services from "../components/Services";
import ExperienceStats from "../components/ExperienceStats/ExperienceStats";
import WorksSection from "../components/WorksSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA";
import FloatingWorkButton from "../components/FloatingWorkButton/FloatingWorkButton";
import SEO from "../components/SEO/SEO";
import ServiceWarranty from "../components/ServiceWarranty";

function Home() {
  return (
    <>
      <SEO
        title="Electrical, Plumbing & Machine Work | You Call We Solve"
        description="You Call We Solve provides reliable electrical, plumbing, breaker machine and core cutting works in Anthiyur and surrounding areas."
      />

      <Hero />
      <ServiceWarranty />
      <Services />
      <ExperienceStats />
      <WorksSection />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <FloatingWorkButton />
    </>
  );
}

export default Home;