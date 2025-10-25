import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjEzOTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Chocolate Elegance"
  },
  {
    url: "https://images.unsplash.com/photo-1642177174813-5e0473519d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMHBhc3RlbHxlbnwxfHx8fDE3NjEzOTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Pastel Cupcakes"
  },
  {
    url: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB2ZWx2ZXQlMjBjYWtlfGVufDF8fHx8MTc2MTMxMTM1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Red Velvet Dream"
  },
  {
    url: "https://images.unsplash.com/photo-1702745573461-31eadfe7852c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMGRlc3NlcnR8ZW58MXx8fHwxNzYxMzEwMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "French Macarons"
  },
  {
    url: "https://images.unsplash.com/photo-1628655386653-acd9ac2c4e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93bmllJTIwZGVzc2VydHxlbnwxfHx8fDE3NjEzOTE4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Decadent Brownies"
  },
  {
    url: "https://images.unsplash.com/photo-1621292391419-c4cdf7b82733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb251dHMlMjBiYWtlcnl8ZW58MXx8fHwxNzYxMzM3NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Artisan Donuts"
  },
  {
    url: "https://images.unsplash.com/photo-1737065175923-7b05466a2c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cmllcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYxMzkxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "French Pastries"
  },
  {
    url: "https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjEzOTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Signature Cakes"
  }
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            Our Creations
          </h2>
          <p className="text-[#8B7968] max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
            A glimpse into our world of elegant, handcrafted desserts
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A882] to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#8B5A3C]/90 via-[#8B5A3C]/40 to-transparent flex items-end justify-center p-3 sm:p-4 lg:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p 
                  className="text-white text-center"
                  style={{ 
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                    fontWeight: '400'
                  }}
                >
                  {image.title}
                </p>
              </motion.div>

              {/* Decorative corner */}
              <div className="hidden sm:block absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#C8A882] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="hidden sm:block absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#C8A882] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
