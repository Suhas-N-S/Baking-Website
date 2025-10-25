import { HeroSection } from "./components/HeroSection";
import { AboutChef } from "./components/AboutChef";
import { MenuSection } from "./components/MenuSection";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutChef />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
