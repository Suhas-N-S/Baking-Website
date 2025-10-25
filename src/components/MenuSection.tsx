import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Cake, Cookie, Sparkles, Croissant, Heart, Leaf } from "lucide-react";

const menuCategories = [
  {
    id: "premium",
    label: "Premium French",
    icon: Sparkles,
    items: [
      "Belgium Chocolate", "Lotus Biscoff", "Red Velvet", "Black Velvet", 
      "Tres-Leches", "Raspberry Chocolate", "Vanilla Raspberry", "Paan",
      "Vanilla Blueberry", "Chocolate Blueberry", "Mixed Berries", "Opera"
    ]
  },
  {
    id: "exotic",
    label: "Exotic Cakes",
    icon: Cake,
    items: [
      "Truffle", "Black Forest", "White Forest", "Butterscotch",
      "Roasted Almond", "Crunchy Dark Chocolate", "Fruit Gateau (Seasonal)",
      "Mango", "Lychee", "Strawberry", "Pineapple", "Mixed Fruit (Customized)",
      "Classic Vanilla", "Chocolate Cake", "Mousse"
    ]
  },
  {
    id: "travel",
    label: "Travel Cakes",
    icon: Heart,
    items: [
      "Dates & Apricot", "Pecan Caramel", "Orange Hazelnut Loaf",
      "Marble Cake", "Lemon Pound Cake", "Spice Cake",
      "Dip Chocolate Cake", "Banana Walnut Cake", "Carrot Loaf", "Mawa Cake"
    ]
  },
  {
    id: "dessert",
    label: "Dessert Cakes",
    icon: Croissant,
    items: [
      "Rasmalai", "Gulab Jamun", "White Chocolate Coconut",
      "Gulkand", "Rose Pistachio", "Rasgulla"
    ]
  },
  {
    id: "brownies",
    label: "Brownies",
    icon: Cookie,
    items: [
      "Crinkle Top", "Oreo", "Chocolate Walnut", "Lotus Biscoff",
      "Caramel", "Nutella", "Gulkand Blondie", "Raspberry Blondie",
      "Red Velvet", "Mango"
    ]
  },
  {
    id: "healthy",
    label: "Immunity Boosters",
    icon: Leaf,
    items: [
      "Oats & Nuts Bars", "Chocolate Almond Granola",
      "Multi-Seed Bars", "Crunchy Granola"
    ]
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-[#8B5A3C] mb-3"
            style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '400',
              letterSpacing: '0.02em'
            }}
          >
            Our Exquisite Menu
          </h2>
          <p className="text-[#8B7968] max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Every creation is made with love, 100% eggless, and crafted to perfection
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A882] to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="premium" className="w-full">
            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden mb-8 -mx-4">
              <div className="overflow-x-auto scrollbar-hide px-4">
                <TabsList className="inline-flex gap-2 bg-white/50 backdrop-blur p-2 rounded-2xl border border-[#E8C4B8]/30 min-w-min">
                  {menuCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="flex items-center gap-1.5 data-[state=active]:bg-[#8B5A3C] data-[state=active]:text-white rounded-xl px-3 py-2 transition-all whitespace-nowrap text-sm flex-shrink-0"
                      >
                        <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{category.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>
            </div>

            {/* Desktop: Wrapped Tabs */}
            <TabsList className="hidden lg:flex w-full flex-wrap justify-center gap-2 bg-white/50 backdrop-blur p-2 rounded-2xl mb-8 border border-[#E8C4B8]/30">
              {menuCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-[#8B5A3C] data-[state=active]:text-white rounded-xl px-4 py-2 transition-all"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {menuCategories.map((category, idx) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Card className="p-4 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#E8C4B8]/30 rounded-2xl group">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#C8A882] group-hover:bg-[#8B5A3C] transition-colors flex-shrink-0" />
                          <p className="text-[#3D2817] group-hover:text-[#8B5A3C] transition-colors">
                            {item}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Additional Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {["Cupcakes", "Breads & Donuts", "Cookies & Baklava", "Customised Orders"].map((item, idx) => (
            <Card 
              key={item}
              className="p-6 bg-gradient-to-br from-white to-[#FFF9F5] border-[#E8C4B8]/30 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <p className="text-[#8B5A3C]" style={{ fontWeight: '500', fontSize: '1.1rem' }}>
                {item}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
