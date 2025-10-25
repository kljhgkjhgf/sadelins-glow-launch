import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <ContactForm />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
