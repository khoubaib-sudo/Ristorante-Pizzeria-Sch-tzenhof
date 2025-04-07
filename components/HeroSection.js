"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero-bg1.jpg",
  "/hero-bg2.jpg",
  "/hero-bg3.jpg",
  "/hero-bg4.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Layered Backgrounds */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Hero background ${index}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content Layer */}
      <header className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 sm:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold font-[Italianno] leading-tight drop-shadow-xl">
          Willkommen im Ristorante <br /> Pizzeria Schützenhof
        </h1>

        <p className="text-white font-bold text-base sm:text-lg md:text-xl mt-4 drop-shadow-lg">
          Seit 2010 servieren wir authentische deutsche und italienische Gerichte.
        </p>

        <div className="mt-6 sm:mt-8">
          <Image
            src="/olive branch 1.png"
            alt="Olive Branch"
            width={192}
            height={192}
            className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
