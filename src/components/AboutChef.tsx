import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Sparkles } from "lucide-react";


export function AboutChef() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              fontWeight: "400",
              letterSpacing: "0.02em",
            }}
          >
            Meet Chef Bindu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A882] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1727975741756-9c8591e5aac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjaGVmJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMzI4MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chef Bindu"
                className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B5A3C]/30 to-transparent" />
            </div>
            {/* Decorative gold corner */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 lg:w-24 lg:h-24 bg-[#C8A882] rounded-full opacity-20" />
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 lg:w-32 lg:h-32 bg-[#E8C4B8] rounded-full opacity-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#FFF9F5] p-5 sm:p-6 lg:p-8 rounded-2xl border border-[#E8C4B8]/30 shadow-lg">
              <p
                className="text-[#3D2817] leading-relaxed mb-6"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                }}
              >
                "I am a certified Chef from{" "}
                <span className="text-[#8B5A3C]">City & Guilds, London</span>.
                We specialize in{" "}
                <span className="text-[#8B5A3C]">Eggless Baking</span> and{" "}
                <span className="text-[#8B5A3C]">Customised Cakes</span> for all
                occasions."
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="text-center">
                  <div className="bg-white p-2.5 sm:p-3 lg:p-4 rounded-xl shadow-md mb-2 mx-auto w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#C8A882]" />
                  </div>
                  <p className="text-[#8B5A3C] text-xs sm:text-sm">
                    Certified Chef
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-2.5 sm:p-3 lg:p-4 rounded-xl shadow-md mb-2 mx-auto w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E8C4B8]" />
                  </div>
                  <p className="text-[#8B5A3C] text-xs sm:text-sm">
                    100% Eggless
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-2.5 sm:p-3 lg:p-4 rounded-xl shadow-md mb-2 mx-auto w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#C8A882]" />
                  </div>
                  <p className="text-[#8B5A3C] text-xs sm:text-sm">
                    Customised
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
