"use client";

import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { LocationCard, Location } from "./LocationCard";

interface LocationWithRegion extends Location {
  region: string;
}

export const LocationsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const locations: LocationWithRegion[] = [
    {
      name: "Downtown Flagship",
      address: "123 Main Street",
      city: "New York, NY 10001",
      hours: "Mon-Fri: 6AM-9PM · Sat-Sun: 7AM-10PM",
      phone: "(212) 555-0123",
      image: "/images/locations/downtown.jpg",
      features: ["Drive-Thru", "Roastery", "Events"],
      region: "east",
      isNew: false,
    },
    {
      name: "Brooklyn Heights",
      address: "456 Atlantic Avenue",
      city: "Brooklyn, NY 11201",
      hours: "Daily: 6:30AM-8PM",
      phone: "(718) 555-0456",
      image: "/images/locations/brooklyn.jpg",
      features: ["Outdoor Seating", "Pet Friendly"],
      region: "east",
      isNew: true,
    },
    {
      name: "Santa Monica",
      address: "789 Ocean Boulevard",
      city: "Santa Monica, CA 90401",
      hours: "Daily: 5:30AM-9PM",
      phone: "(310) 555-0789",
      image: "/images/locations/santamonica.jpg",
      features: ["Beachfront", "Breakfast Menu"],
      region: "west",
      isNew: false,
    },
    {
      name: "Chicago Loop",
      address: "321 Michigan Avenue",
      city: "Chicago, IL 60601",
      hours: "Mon-Fri: 5:30AM-8PM · Sat-Sun: 7AM-6PM",
      phone: "(312) 555-0321",
      image: "/images/locations/chicago.jpg",
      features: ["Workspace", "Meeting Rooms"],
      region: "midwest",
      isNew: false,
    },
    {
      name: "Austin South",
      address: "555 South Congress",
      city: "Austin, TX 78704",
      hours: "Daily: 6AM-10PM",
      phone: "(512) 555-0555",
      image: "/images/locations/austin.jpg",
      features: ["Live Music", "Local Art"],
      region: "south",
      isNew: true,
    },
    {
      name: "Seattle Original",
      address: "100 Pike Street",
      city: "Seattle, WA 98101",
      hours: "Daily: 5AM-9PM",
      phone: "(206) 555-0100",
      image: "/images/locations/seattle.jpg",
      features: ["Flagship", "Coffee Lab", "Tours"],
      region: "west",
      isNew: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Locations" },
    { id: "east", label: "East Coast" },
    { id: "west", label: "West Coast" },
    { id: "midwest", label: "Midwest" },
    { id: "south", label: "South" },
  ];

  const filteredLocations =
    activeFilter === "all"
      ? locations
      : locations.filter((loc) => loc.region === activeFilter);

  return (
    <section className="relative py-32 px-6 bg-neutral-950" id="locations">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-white/50 text-sm tracking-widest uppercase mb-4">
              Find Us Near You
            </span>
            <h2 className="text-5xl sm:text-6xl font-extralight mb-6">
              Our Locations
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              From coast to coast, discover your nearest Beans & Brews and
              experience exceptional coffee in spaces designed for connection.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Tabs */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-white text-black"
                    : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Location Stats Bar */}
        <RevealOnScroll delay={150}>
          <div className="flex flex-wrap justify-center gap-8 mb-12 py-6 border-y border-white/10">
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">
                {filteredLocations.length}
              </div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Locations
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">6</div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Cities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-white mb-1">4</div>
              <div className="text-xs tracking-wider text-white/40 uppercase">
                Regions
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location, index) => (
            <RevealOnScroll key={location.name} delay={index * 100}>
              <LocationCard location={location} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Map CTA */}
        <RevealOnScroll delay={300}>
          <div className="mt-16 relative overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div>
                <h3 className="text-3xl font-light mb-4">
                  Can&apos;t find a location near you?
                </h3>
                <p className="text-white/50 mb-6">
                  We&apos;re expanding rapidly. Enter your city to be notified
                  when we open a new Beans & Brews in your area.
                </p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter your city..."
                    className="flex-1 bg-black/50 border border-white/20 px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-xs tracking-widest uppercase font-medium transition-colors whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                {/* Decorative Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 border border-white/20 rounded-full animate-pulse-slow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/40 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
                    {/* Location Pins */}
                    {[
                      { x: -60, y: -40 },
                      { x: 50, y: -30 },
                      { x: -30, y: 50 },
                      { x: 70, y: 20 },
                    ].map((pos, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-white rounded-full animate-ping"
                        style={{
                          top: `calc(50% + ${pos.y}px)`,
                          left: `calc(50% + ${pos.x}px)`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: "2s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
