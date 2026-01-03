"use client";

import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { MagneticButton } from "./MagneticButton";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  popular?: boolean;
  newItem?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "espresso",
    name: "Espresso Bar",
    icon: "☕",
    description: "Classic espresso-based drinks crafted with precision",
    items: [
      {
        name: "Espresso",
        description: "Bold, concentrated shot of pure coffee essence",
        price: "$3.50",
        tag: "Single / Double",
      },
      {
        name: "Americano",
        description: "Espresso with hot water for a smooth, rich flavor",
        price: "$4.00",
      },
      {
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk, and velvety foam",
        price: "$4.75",
        popular: true,
      },
      {
        name: "Latte",
        description: "Silky steamed milk with a shot of espresso",
        price: "$5.00",
        tag: "Oat +$0.75",
      },
      {
        name: "Flat White",
        description: "Velvety microfoam over a double ristretto",
        price: "$5.25",
      },
      {
        name: "Cortado",
        description: "Equal parts espresso and warm silky milk",
        price: "$4.50",
      },
      {
        name: "Macchiato",
        description: "Espresso marked with a dollop of foamed milk",
        price: "$4.00",
      },
      {
        name: "Mocha",
        description: "Rich chocolate blended with espresso and steamed milk",
        price: "$5.50",
        popular: true,
      },
    ],
  },
  {
    id: "cold",
    name: "Cold Drinks",
    icon: "🧊",
    description: "Refreshing cold beverages for any time of day",
    items: [
      {
        name: "Cold Brew",
        description: "24-hour slow steeped for smooth, bold flavor",
        price: "$5.00",
        popular: true,
      },
      {
        name: "Nitro Cold Brew",
        description: "Creamy, cascading cold brew infused with nitrogen",
        price: "$5.75",
        newItem: true,
      },
      {
        name: "Iced Latte",
        description: "Chilled espresso with cold milk over ice",
        price: "$5.25",
      },
      {
        name: "Iced Americano",
        description: "Espresso poured over ice with cold water",
        price: "$4.50",
      },
      {
        name: "Vietnamese Iced Coffee",
        description: "Bold coffee with sweetened condensed milk",
        price: "$5.50",
        popular: true,
      },
      {
        name: "Shakerato",
        description: "Italian-style iced espresso shaken with ice",
        price: "$5.00",
        newItem: true,
      },
      {
        name: "Affogato",
        description: "Vanilla gelato drowned in hot espresso",
        price: "$6.00",
      },
    ],
  },
  {
    id: "specialty",
    name: "Specialty",
    icon: "✨",
    description: "Unique creations and seasonal favorites",
    items: [
      {
        name: "Lavender Honey Latte",
        description: "Floral lavender with local honey and espresso",
        price: "$6.25",
        newItem: true,
        popular: true,
      },
      {
        name: "Maple Oat Cortado",
        description: "Pure maple syrup with oat milk and espresso",
        price: "$5.75",
      },
      {
        name: "Rose Cardamom Latte",
        description: "Exotic rose water and cardamom with steamed milk",
        price: "$6.00",
      },
      {
        name: "Charcoal Latte",
        description: "Activated charcoal with vanilla and oat milk",
        price: "$6.00",
        tag: "Caffeine-free",
      },
      {
        name: "Matcha Espresso Fusion",
        description: "Ceremonial grade matcha meets espresso",
        price: "$6.50",
        newItem: true,
      },
      {
        name: "Turmeric Golden Latte",
        description: "Anti-inflammatory turmeric with honey and spices",
        price: "$5.50",
        tag: "Caffeine-free",
      },
      {
        name: "Salted Caramel Mocha",
        description: "House-made caramel with sea salt and chocolate",
        price: "$6.25",
        popular: true,
      },
    ],
  },
  {
    id: "pourover",
    name: "Pour Over",
    icon: "⏳",
    description: "Single origin beans brewed to perfection",
    items: [
      {
        name: "Ethiopia Yirgacheffe",
        description: "Bright, floral notes with hints of bergamot and jasmine",
        price: "$6.00",
        tag: "Light Roast",
        popular: true,
      },
      {
        name: "Colombia Huila",
        description: "Balanced sweetness with caramel and citrus notes",
        price: "$5.50",
        tag: "Medium Roast",
      },
      {
        name: "Guatemala Antigua",
        description: "Rich chocolate undertones with subtle spice",
        price: "$5.75",
        tag: "Medium Roast",
      },
      {
        name: "Kenya AA",
        description: "Wine-like acidity with blackcurrant and tomato notes",
        price: "$6.25",
        tag: "Light Roast",
      },
      {
        name: "Sumatra Mandheling",
        description: "Earthy, full-bodied with low acidity",
        price: "$5.75",
        tag: "Dark Roast",
      },
      {
        name: "Panama Geisha",
        description: "Exceptional floral aromatics and tea-like body",
        price: "$12.00",
        tag: "Rare",
        newItem: true,
      },
    ],
  },
  {
    id: "food",
    name: "Kitchen",
    icon: "🥐",
    description: "Fresh baked goods and light bites",
    items: [
      {
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with chili flakes",
        price: "$9.50",
        popular: true,
      },
      {
        name: "Croissant",
        description: "Buttery, flaky French-style pastry",
        price: "$4.50",
        tag: "Plain / Chocolate",
      },
      {
        name: "Açaí Bowl",
        description: "Blended açaí topped with granola and fresh fruit",
        price: "$11.00",
      },
      {
        name: "Breakfast Burrito",
        description: "Scrambled eggs, cheese, beans, and salsa verde",
        price: "$10.50",
      },
      {
        name: "Banana Bread",
        description: "House-made with walnuts, served warm",
        price: "$4.00",
        popular: true,
      },
      {
        name: "Grain Bowl",
        description: "Quinoa, roasted vegetables, tahini dressing",
        price: "$12.00",
        tag: "Vegan",
      },
      {
        name: "Cheese & Charcuterie",
        description: "Selection of artisan cheeses and cured meats",
        price: "$16.00",
      },
    ],
  },
];

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("espresso");
  const currentCategory = menuData.find((cat) => cat.id === activeCategory)!;

  return (
    <section
      className="relative py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
      id="menu"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-white/50 text-sm tracking-widest uppercase mb-4">
              Signature Collection
            </span>
            <h2 className="text-5xl sm:text-6xl font-extralight mb-4">
              Our Menu
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              From classic espresso drinks to seasonal specialties, every cup is
              crafted with care using ethically sourced beans.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Tabs */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 px-5 py-3 text-sm tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-black"
                    : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span className="uppercase">{category.name}</span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Category Description */}
        <RevealOnScroll delay={150}>
          <div className="text-center mb-12">
            <p className="text-white/50 text-sm tracking-wide">
              {currentCategory.description}
            </p>
          </div>
        </RevealOnScroll>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {currentCategory.items.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 50}>
              <div className="group border-t border-white/10 py-6 cursor-pointer transition-all hover:bg-white/[0.02] px-4 -mx-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="text-xl font-light group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-white/10 text-white/70">
                          Popular
                        </span>
                      )}
                      {item.newItem && (
                        <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-white text-black">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-1">
                      {item.description}
                    </p>
                    {item.tag && (
                      <span className="text-xs text-white/30 tracking-wide">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-lg font-light text-white">
                      {item.price}
                    </span>
                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 transition-all opacity-0 group-hover:opacity-100">
                      <span className="text-sm">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom border for last items */}
        <div className="border-t border-white/10 mt-0" />

        {/* Menu Stats */}
        <RevealOnScroll delay={300}>
          <div className="flex flex-wrap justify-center gap-12 mt-16 py-8 border-y border-white/10">
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">
                {menuData.reduce((acc, cat) => acc + cat.items.length, 0)}+
              </div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Menu Items
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">15</div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Origins
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">5</div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">
                100%
              </div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Ethically Sourced
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={400}>
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm mb-6">
              Ask about our seasonal specials and rotating single-origin
              selections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton className="border border-white/30 px-10 py-4 text-sm tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300">
                Download Full Menu
              </MagneticButton>
              <MagneticButton className="bg-white text-black px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300">
                Order Online
              </MagneticButton>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

