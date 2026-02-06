import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FocusAreas from "@/components/FocusAreas";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusAreas />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="919962901122" />
    </div>
  );
};

export default Index;