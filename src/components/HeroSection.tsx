import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChefHat } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1737065175923-7b05466a2c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cmllcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYxMzkxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2817]/40 via-[#3D2817]/50 to-[#FFF9F5]/95" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full py-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo/Icon */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="bg-[#C8A882] p-3 sm:p-4 rounded-full shadow-lg">
            <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1 
          className="mb-3 sm:mb-4 text-white drop-shadow-lg px-2"
          style={{ 
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 8vw, 5rem)',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '0.02em'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Flourish Patisseries
          <br />
          <span style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)' }}>by Chef Bindu</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          className="mb-6 sm:mb-8 text-[#F5E6E0] max-w-2xl mx-auto px-4"
          style={{
            fontSize: 'clamp(0.9rem, 3vw, 1.5rem)',
            fontWeight: '300',
            letterSpacing: '0.03em',
            lineHeight: '1.5'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Premium Eggless French-Inspired Cakes & Desserts
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-[#C8A882] hover:bg-[#B89872] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: '500' }}
          >
            Pre-Order Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto bg-white/90 hover:bg-white text-[#8B5A3C] border-2 border-white px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: '500' }}
          >
            View Menu
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#FFF9F5] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </section>
  );
}
