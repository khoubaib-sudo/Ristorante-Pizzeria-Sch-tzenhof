"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 w-320 bg-transparent backdrop-blur-lg shadow-lg py-3 px-8 flex justify-between items-center rounded-full transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} z-50`}>
      <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
      <ul className="flex space-x-6">
        <li><a href="#" className="text-white font-bold hover:text-[#1d7962]">Home</a></li>
        <li><a href="#" className="text-white font-bold hover:text-[#1d7962]">Menu</a></li>
        <li><a href="#" className="text-white font-bold hover:text-[#1d7962]">About Us</a></li>
      </ul>
      <Button className="bg-[#4F583D] hover:bg-green-900 rounded-full text-white ">Contact us <ArrowRightIcon className="w-5 h-5 text-white" /></Button>
    </nav>
  );
};

export default Navbar;
