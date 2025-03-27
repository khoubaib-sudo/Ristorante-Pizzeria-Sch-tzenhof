"use client";

import React from "react";
import { FaUtensils, FaLeaf, FaHome, FaUserTie, FaUsers, FaWineGlass } from "react-icons/fa";

const AboutUs = () => (
  <section className="relative w-full py-16 px-6 grid place-items-center">
    {/* Linke Illustration */}
    <img
      src="/left side.png"
      alt="Illustration Links"
      className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 w-52 md:w-58 opacity-80"
    />

    {/* Rechte Illustration */}
    <img
      src="/right side.png"
      alt="Illustration Rechts"
      className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 w-32 md:w-58 opacity-80 mx-1.5"
    />

    {/* Abschnitt Inhalt */}
    <div className="max-w-2xl mb-10 text-center">
      <h3 className="text-2xl font-semibold text-[#6a755c]">Warum uns wählen?</h3>
      <h3 className="text-6xl font-bold font-[Italianno]">Erleben Sie das Beste aus Italien</h3>
      <p className="text-lg text-gray-600 mt-2">
        Im Ristorante Pizzeria Schützenhof bringen wir mit jedem Gericht die Essenz der italienischen Küche auf Ihren Tisch.
      </p>
    </div>

    {/* Rasterlayout */}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-8">
      {/* Authentische Rezepte */}
      <div className="flex flex-col items-start text-left">
        <div className="flex items-center mb-2">
          <FaUtensils className="text-[#6a755c] text-xl mr-2" />
          <h3 className="text-xl font-semibold text-[#6a755c]">Authentische Rezepte</h3>
        </div>
        <p className="text-gray-700">
          Unsere Gerichte basieren auf traditionellen italienischen Rezepten,<br /> die über Generationen weitergegeben wurden.
        </p>
      </div>

      {/* Frische Zutaten */}
      <div className="flex flex-col justify-end text-right">
        <div className="flex items-center mb-2 justify-end">
          <FaLeaf className="text-[#6a755c] text-xl mr-2" />
          <h3 className="text-xl font-semibold text-[#6a755c]">Frische Zutaten</h3>
        </div>
        <p className="text-gray-700">
          Wir beziehen die frischesten Zutaten, <br /> um höchste Qualität in jedem Gericht zu gewährleisten.
        </p>
      </div>

      {/* Gemütliche Atmosphäre */}
      <div className="flex flex-col items-start text-left">
        <div className="flex items-center mb-2">
          <FaHome className="text-[#6a755c] text-xl mr-2" />
          <h3 className="text-xl font-semibold text-[#6a755c]">Gemütliche Atmosphäre</h3>
        </div>
        <p className="text-gray-700">
          Genießen Sie eine gemütliche und einladende Atmosphäre,<br />  die jede Mahlzeit besonders macht.
        </p>
      </div>

      {/* Erfahrene Köche */}
      <div className="flex flex-col justify-end text-right">
        <div className="flex items-center mb-2 justify-end">
          <FaUserTie className="text-[#6a755c] text-xl mr-2" />
          <h3 className="text-xl font-semibold text-[#6a755c]">Erfahrene Köche</h3>
        </div>
        <p className="text-gray-700">
          Unsere talentierten Köche bringen jahrelange Erfahrung und <br /> Leidenschaft in die Küche.
        </p>
      </div>

      {/* Familienfreundlich */}
      <div className="flex flex-col items-start text-left">
        <div className="flex items-center mb-2">
          <FaUsers className="text-[#6a755c] text-xl mr-2" />
          <h3 className="text-xl font-semibold text-[#6a755c]">Familienfreundlich</h3>
        </div>
        <p className="text-gray-700">
          Eine einladende Umgebung, <br /> in der Familien gemeinsam eine köstliche Mahlzeit genießen können.
        </p>
      </div>

      {/* Exquisite Weinauswahl */}
      <div className="flex flex-col justify-end text-right">
        <div className="flex items-center mb-2 justify-end">
          <FaWineGlass className="text-[#6a755c] text-xl mr-2" />
          <h3 className="text-xl font-semibold text-[#6a755c]">Exquisite Weinauswahl</h3>
        </div>
        <p className="text-gray-700">
          Ergänzen Sie Ihre Mahlzeit mit einer erlesenen Auswahl an italienischen Weinen.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
