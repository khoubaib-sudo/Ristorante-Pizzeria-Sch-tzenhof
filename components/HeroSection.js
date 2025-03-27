"use client";

import React from "react";

const HeroSection = () => (
  <section id="hero">
    <header className="relative h-screen w-full flex flex-col justify-center bg-[url('/hero-bg.png')] bg-cover bg-center text-white px-4 sm:px-8">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        
        {/* Responsive Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold font-[Italianno] text-white leading-tight">
          Willkommen im Ristorante <br /> Pizzeria Schützenhof
        </h1>
        
        {/* Subtext */}
        <p className="text-white font-bold text-base sm:text-lg md:text-xl mt-4">
          Seit 2010 servieren wir authentische italienische Gerichte.
        </p>

        {/* Olive Branch Image */}
        <div className="mt-6 sm:mt-8">
          <img
            src="/olive branch 1.png"
            alt="Olive Branch"
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto mx-auto"
          />
        </div>
      </div>
    </header>
  </section>
);

export default HeroSection;
