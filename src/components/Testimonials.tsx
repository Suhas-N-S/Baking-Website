import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The Red Velvet cake was absolutely divine! Perfect for my daughter's birthday. The fact that it's eggless makes it even better for our family.",
    rating: 5,
    occasion: "Birthday Celebration"
  },
  {
    name: "Rajesh Kumar",
    text: "Chef Bindu's Lotus Biscoff cake is a masterpiece! The texture, flavor, and presentation were beyond our expectations. Will definitely order again.",
    rating: 5,
    occasion: "Anniversary"
  },
  {
    name: "Anita Menon",
    text: "Ordered the Rasmalai cake for Diwali and everyone loved it! The fusion of traditional and French techniques is brilliant. Highly recommended!",
    rating: 5,
    occasion: "Festival"
  },
  {
    name: "Vikram Patel",
    text: "The brownies are to die for! Rich, fudgy, and perfectly baked. The travel cakes are also excellent for gifts. Great quality and service.",
    rating: 5,
    occasion: "Corporate Gift"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto">
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
            What Our Customers Say
          </h2>
          <p className="text-[#8B7968] max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
            Testimonials from our delighted patrons across Bangalore
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A882] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-5 lg:p-6 bg-white border-[#E8C4B8]/30 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#C8A882] opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C8A882] text-[#C8A882]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#3D2817] mb-3 sm:mb-4 flex-grow text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-3 sm:pt-4 border-t border-[#E8C4B8]/30">
                  <p className="text-[#8B5A3C] text-sm sm:text-base" style={{ fontWeight: '500' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-[#8B7968] text-xs sm:text-sm mt-1">
                    {testimonial.occasion}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
