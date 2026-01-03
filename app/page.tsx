"use client";

import { useEffect, useState } from "react";
import {
  SteamAnimation,
  FloatingBean,
  AnimatedCounter,
  ParallaxSection,
  MagneticButton,
  RevealOnScroll,
  LocationsSection,
  MenuSection,
} from "./components";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = [
    { value: 15, suffix: "+", label: "Years of Excellence" },
    { value: 50, suffix: "+", label: "Global Farm Partners" },
    { value: 120, suffix: "K", label: "Cups Served Daily" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor Glow */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Floating Beans Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <FloatingBean
            key={i}
            delay={i * 0.7}
            size={20 + i * 5}
            left={10 + i * 12}
            duration={8 + i * 2}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor:
            scrollY > 100 ? "rgba(0, 0, 0, 0.95)" : "transparent",
          backdropFilter: scrollY > 100 ? "blur(20px)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-widest">B&B</div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider text-white/70">
            {["Menu", "Locations", "Our Story", "Sustainability"].map(
              (item) => (
                <a
                  key={item}
                  href={
                    item === "Locations"
                      ? "#locations"
                      : item === "Menu"
                      ? "#menu"
                      : "#"
                  }
                  className="relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>
          <MagneticButton className="border border-white/30 px-6 py-2 text-sm tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300">
            Order Now
          </MagneticButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[800px] h-[800px] rounded-full border border-white/5"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.02}deg)`,
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full border border-white/10"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${-scrollY * 0.03}deg)`,
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full border border-white/15"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.04}deg)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Coffee Cup Icon with Steam */}
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 mx-auto border border-white/30 rounded-full flex items-center justify-center animate-pulse-slow">
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                <path d="M6 1v3M10 1v3M14 1v3" strokeLinecap="round" />
              </svg>
            </div>
            <SteamAnimation />
          </div>

          <div className="overflow-hidden mb-6">
            <h1
              className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-tight animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Beans & Brews
            </h1>
          </div>

          <div className="overflow-hidden mb-8">
            <p
              className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Where every cup tells a story of{" "}
              <span className="text-white">passion</span>,{" "}
              <span className="text-white">precision</span>, and{" "}
              <span className="text-white">perfection</span>
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <MagneticButton className="group relative overflow-hidden bg-white text-black px-10 py-4 text-sm font-medium tracking-widest uppercase">
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </MagneticButton>
            <MagneticButton className="group border border-white/30 px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Our Locations
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-xs tracking-widest text-white/40 uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealOnScroll key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-extralight text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm tracking-wider text-white/40 uppercase">
                    {stat.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='white' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll>
                <span className="inline-block text-white/50 text-sm tracking-widest uppercase mb-4">
                  Our Philosophy
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <h2 className="text-5xl sm:text-6xl font-extralight mb-8 leading-tight">
                  Crafted with
                  <br />
                  <span className="text-white/70">Purpose</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <p className="text-lg text-white/50 leading-relaxed mb-6">
                  Every bean we select, every roast we perfect, and every cup we
                  serve is a testament to our unwavering commitment to
                  excellence. We travel to the world&apos;s finest
                  coffee-growing regions to forge lasting partnerships with
                  farmers who share our vision.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="text-lg text-white/50 leading-relaxed mb-8">
                  From the misty highlands of Ethiopia to the volcanic slopes of
                  Guatemala, we source beans that tell stories of terroir,
                  tradition, and sustainable farming practices.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors group"
                >
                  <span className="tracking-wider">Discover Our Origins</span>
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </RevealOnScroll>
            </div>

            <ParallaxSection speed={0.3}>
              <RevealOnScroll delay={200}>
                <div className="relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-sm overflow-hidden border border-white/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6 border border-white/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-white/40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <ellipse cx="12" cy="14" rx="8" ry="10" />
                            <path
                              d="M12 4C12 4 9 9 9 14C9 19 12 24 12 24"
                              stroke="rgba(0,0,0,0.3)"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <p className="text-white/30 text-sm tracking-widest uppercase">
                          Single Origin
                        </p>
                        <p className="text-2xl font-light mt-2">
                          Ethiopia Yirgacheffe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-white/10 rounded-full" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 border border-white/10 rounded-full" />
                </div>
              </RevealOnScroll>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Locations Section */}
      <LocationsSection />

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="inline-block text-white/50 text-sm tracking-widest uppercase mb-4">
                The Beans & Brews Difference
              </span>
              <h2 className="text-5xl sm:text-6xl font-extralight">
                Why Choose Us
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              {
                icon: "◈",
                title: "Sustainable Sourcing",
                desc: "Direct trade relationships with farmers committed to environmental stewardship",
              },
              {
                icon: "◉",
                title: "Artisan Roasting",
                desc: "Small-batch roasting that brings out each bean's unique character",
              },
              {
                icon: "◎",
                title: "Expert Baristas",
                desc: "Trained craftspeople passionate about the perfect pour",
              },
              {
                icon: "◇",
                title: "Global Selection",
                desc: "Curated beans from 15+ countries across three continents",
              },
              {
                icon: "○",
                title: "Zero Waste Goal",
                desc: "Committed to eliminating single-use plastics by 2025",
              },
              {
                icon: "◆",
                title: "Community First",
                desc: "Reinvesting in local communities and coffee-growing regions",
              },
            ].map((feature, index) => (
              <RevealOnScroll key={feature.title} delay={index * 100}>
                <div className="bg-black p-10 h-full group hover:bg-white/[0.03] transition-colors duration-500">
                  <div className="text-4xl mb-6 text-white/30 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.03]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10 animate-spin-slow-reverse" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <h2 className="text-5xl sm:text-6xl font-extralight mb-6 leading-tight">
              Ready to Experience
              <br />
              <span className="text-white/70">Excellence?</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-lg text-white/40 mb-10 max-w-xl mx-auto">
              Visit one of our locations and discover why coffee lovers around
              the world choose Beans & Brews.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton className="group relative overflow-hidden bg-white text-black px-12 py-4 text-sm font-medium tracking-widest uppercase">
                <span className="relative z-10">Find Nearest Location</span>
                <div className="absolute inset-0 bg-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </MagneticButton>
              <MagneticButton className="border border-white/30 px-12 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                Join Our Club
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-light tracking-widest mb-6">
                Beans & Brews
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Crafting exceptional coffee experiences since 2009. Every cup
                tells a story.
              </p>
            </div>
            {[
              {
                title: "Explore",
                links: ["Menu", "Locations", "Our Story", "Careers"],
              },
              {
                title: "Connect",
                links: ["Instagram", "Twitter", "Facebook", "Newsletter"],
              },
              {
                title: "Support",
                links: ["Contact Us", "FAQ", "Accessibility", "Privacy"],
              },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-medium tracking-wider uppercase mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/40 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/30">
              © 2026 Beans & Brews. All rights reserved.
            </p>
            <p className="text-sm text-white/30">Crafted with ○ and passion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
