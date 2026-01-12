import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import FocusAreas from "@/components/FocusAreas";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImpactStats />
        <AboutSection />
        <FocusAreas />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;