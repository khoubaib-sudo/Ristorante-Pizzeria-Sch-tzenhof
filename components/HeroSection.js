"use client";

import React from "react";

const HeroSection = () => (
  <header className="relative h-screen w-full flex flex-col justify-center bg-[url('/hero-bg.png')] bg-cover bg-center text-white">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-semibold font-[Italianno] text-white">
        Willkommen im Ristorante <br /> Pizzeria Schützenhof
      </h1>
      <p className="text-white font-bold text-lg mt-4">
        Seit 2010 servieren wir authentische italienische Gerichte.
      </p>
      <div className="mt-8">
        <img
          src="/olive branch 1.png" 
          alt="Olive Branch"
          className="w-42 h-auto mx-auto"
        />
      </div>
    </div>
  </header>
);

export default HeroSection;
