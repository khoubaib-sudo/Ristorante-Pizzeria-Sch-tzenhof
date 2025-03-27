"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Menu />
      <Footer />
    </div>
  );
}
