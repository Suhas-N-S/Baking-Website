import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 
            className="text-[#8B5A3C] mb-3 px-4"
            style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              fontWeight: '400',
              letterSpacing: '0.02em'
            }}
          >
            Visit Us & Get In Touch
          </h2>
          <p className="text-[#8B7968] max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
            We accept pre-orders only. Reach out to us to place your order.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A882] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            <Card className="p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FFF9F5] to-white border-[#E8C4B8]/30 rounded-xl sm:rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#C8A882] p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#8B5A3C] mb-2" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
                    Our Location
                  </h3>
                  <p className="text-[#3D2817] text-sm sm:text-base">
                    #8, 2nd floor, 22nd Main,<br />
                    13th Cross, Padmanabhanagar,<br />
                    Bangalore - 560070
                  </p>
                  <p className="text-[#8B7968] text-xs sm:text-sm mt-2">
                    <span className="italic">Landmark:</span> Ravi Gas Agency
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FFF9F5] to-white border-[#E8C4B8]/30 rounded-xl sm:rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#C8A882] p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#8B5A3C] mb-2" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
                    Call Us
                  </h3>
                  <a href="tel:7411083388" className="block text-[#3D2817] hover:text-[#8B5A3C] transition-colors text-sm sm:text-base">
                    +91 7411083388
                  </a>
                  <a href="tel:7035553000" className="block text-[#3D2817] hover:text-[#8B5A3C] transition-colors text-sm sm:text-base">
                    +91 7035553000
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FFF9F5] to-white border-[#E8C4B8]/30 rounded-xl sm:rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#8B5A3C] mb-2" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
                    Follow Us
                  </h3>
                  <a 
                    href="https://instagram.com/flourishpatisseries" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3D2817] hover:text-purple-600 transition-colors text-sm sm:text-base break-all"
                  >
                    @flourishpatisseries
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-[#C8A882]/10 to-[#E8C4B8]/10 border-[#C8A882]/30 rounded-xl sm:rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#8B5A3C] p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#8B5A3C] mb-2" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
                    Important Note
                  </h3>
                  <p className="text-[#3D2817] text-sm sm:text-base" style={{ fontWeight: '500' }}>
                    *Pre-orders only*
                  </p>
                  <p className="text-[#8B7968] text-xs sm:text-sm mt-1">
                    Please call or message us in advance to place your order
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-[#8B5A3C] to-[#6B4A2C] text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl">
              <h3 
                className="mb-3 sm:mb-4"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: '400'
                }}
              >
                Ready to Order?
              </h3>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg" style={{ lineHeight: '1.8', opacity: 0.95 }}>
                Experience the finest eggless French-inspired cakes and desserts in Bangalore. 
                Each creation is crafted with premium ingredients and years of expertise.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-white text-[#8B5A3C] hover:bg-[#FFF9F5] rounded-full py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: '500' }}
                  onClick={() => window.location.href = 'tel:7411083388'}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call to Pre-Order
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full py-5 sm:py-6 transition-all duration-300"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: '500' }}
                  onClick={() => window.open('https://instagram.com/flourishpatisseries', '_blank')}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View on Instagram
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div>
                  <p className="text-2xl sm:text-3xl mb-1">100%</p>
                  <p className="text-xs sm:text-sm opacity-90">Eggless</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl mb-1">✓</p>
                  <p className="text-xs sm:text-sm opacity-90">Certified Chef</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl mb-1">♥</p>
                  <p className="text-xs sm:text-sm opacity-90">Made with Love</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
