"use client";

import React from "react";
import { FaUtensils, FaLeaf, FaHome, FaUserTie, FaUsers, FaWineGlass } from "react-icons/fa";

const AboutUs = () => (
  <section id="about" className="relative w-full py-16 px-4 sm:px-8 grid place-items-center">
    
    {/* Left Illustration */}
    <img
      src="/left side.png"
      alt="Illustration Links"
      className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-28 sm:w-42 md:w-54 opacity-80"
    />

    {/* Right Illustration */}
    <img
      src="/right side.png"
      alt="Illustration Rechts"
      className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-24 sm:w-40 md:w-51 opacity-80"
    />

    {/* Section Content */}
    <div className="max-w-2xl mb-10 text-center">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#6a755c]">Warum uns wählen?</h3>
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[Italianno]">
        Erleben Sie das Beste aus Italien
      </h3>
      <p className="text-md sm:text-lg text-gray-600 mt-2">
        Im Ristorante Pizzeria Schützenhof bringen wir mit jedem Gericht die Essenz der italienischen Küche auf Ihren Tisch.
      </p>
    </div>

    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-4">
      
      {/* Feature Blocks */}
      {[
        { icon: <FaUtensils />, title: "Authentische Rezepte", text: "Unsere Gerichte basieren auf traditionellen italienischen Rezepten, die über Generationen weitergegeben wurden." },
        { icon: <FaLeaf />, title: "Frische Zutaten", text: "Wir beziehen die frischesten Zutaten, um höchste Qualität in jedem Gericht zu gewährleisten." },
        { icon: <FaHome />, title: "Gemütliche Atmosphäre", text: "Genießen Sie eine einladende Atmosphäre, die jede Mahlzeit besonders macht." },
        { icon: <FaUserTie />, title: "Erfahrene Köche", text: "Unsere talentierten Köche bringen jahrelange Erfahrung und Leidenschaft in die Küche." },
        { icon: <FaUsers />, title: "Familienfreundlich", text: "Eine einladende Umgebung, in der Familien gemeinsam eine köstliche Mahlzeit genießen können." },
        { icon: <FaWineGlass />, title: "Exquisite Weinauswahl", text: "Ergänzen Sie Ihre Mahlzeit mit einer erlesenen Auswahl an italienischen Weinen." }
      ].map(({ icon, title, text }, index) => (
        <div key={index} className="flex flex-col items-start sm:items-center lg:items-start text-left">
          <div className="flex items-center mb-2">
            <span className="text-[#6a755c] text-xl mr-2">{icon}</span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#6a755c]">{title}</h3>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">{text}</p>
        </div>
      ))}
      
    </div>
  </section>
);

export default AboutUs;
