import { ChefHat, Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#3D2817] to-[#2D1F12] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="bg-[#C8A882] p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: '400'
                  }}
                >
                  Flourish Patisseries
                </h3>
                <p className="text-xs sm:text-sm text-[#E8C4B8]">by Chef Bindu</p>
              </div>
            </div>
            <p className="text-[#E8C4B8] text-xs sm:text-sm leading-relaxed">
              Premium eggless French-inspired cakes and desserts, crafted with love in Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 sm:mb-4" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#E8C4B8] text-sm">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Chef</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 sm:mb-4" style={{ fontWeight: '500', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              Get In Touch
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-[#E8C4B8]">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <a href="tel:7411083388" className="hover:text-white transition-colors">+91 7411083388</a><br />
                  <a href="tel:7035553000" className="hover:text-white transition-colors">+91 7035553000</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Padmanabhanagar, Bangalore - 560070
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <a 
                  href="https://instagram.com/flourishpatisseries" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm hover:text-white transition-colors break-all"
                >
                  @flourishpatisseries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[#E8C4B8] text-xs sm:text-sm text-center md:text-left">
            &copy; {currentYear} Flourish Patisseries by Chef Bindu. All rights reserved.
          </p>
          <p className="text-[#C8A882] text-xs sm:text-sm text-center md:text-right" style={{ fontWeight: '500' }}>
            Certified by City & Guilds, London
          </p>
        </div>
      </div>
    </footer>
  );
}
