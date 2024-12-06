import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Reviews } from "@/components/Reviews";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ServiceAreas />
      <Reviews />
      <HowItWorks />
      <ContactForm />
    </div>
  );
};

export default Index;