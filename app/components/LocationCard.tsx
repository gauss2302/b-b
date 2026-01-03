"use client";

import { useState } from "react";

export interface Location {
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  image: string;
  features: string[];
  region?: string;
  isNew?: boolean;
}

interface LocationCardProps {
  location: Location;
  index: number;
}

export const LocationCard = ({ location, index }: LocationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden bg-neutral-950 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={`${location.name} location`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          onError={(e) => {
            (
              e.target as HTMLImageElement
            ).src = `https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80`;
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

        {/* New Badge */}
        {location.isNew && (
          <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs tracking-widest uppercase font-medium">
            New
          </div>
        )}

        {/* Quick Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-light mb-1 group-hover:text-white transition-colors">
            {location.name}
          </h3>
          <p className="text-white/60 text-sm">{location.city}</p>
        </div>
      </div>

      {/* Expanded Details */}
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isHovered ? "300px" : "0px" }}
      >
        <div className="p-6 border-t border-white/10">
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="text-sm text-white/80">{location.address}</p>
                <p className="text-sm text-white/50">{location.city}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-white/80">{location.hours}</p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-sm text-white/80">{location.phone}</p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 pt-2">
              {location.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs tracking-wider uppercase px-3 py-1 border border-white/30 text-white/70"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-white text-black hover:bg-white/90 px-4 py-3 text-xs tracking-widest uppercase font-medium transition-colors">
              Get Directions
            </button>
            <button className="flex-1 border border-white/30 hover:border-white hover:text-white px-4 py-3 text-xs tracking-widest uppercase transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


