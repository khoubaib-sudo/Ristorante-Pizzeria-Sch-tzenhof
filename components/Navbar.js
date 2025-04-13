"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu on mobile
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-320  bg-opacity-20 backdrop-blur-lg shadow-lg py-3 px-6 flex items-center justify-between rounded-full transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } z-50`}
    >
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full cursor-pointer"
        onClick={() => handleNavClick("hero")}
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <button
            onClick={() => handleNavClick("hero")}
            className="text-white font-bold hover:text-[#1d7962] transition"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("menu")}
            className="text-white font-bold hover:text-[#1d7962] transition"
          >
            Menu
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("about")}
            className="text-white font-bold hover:text-[#1d7962] transition"
          >
            Über uns
          </button>
        </li>
      </ul>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:block">
        <Button
          onClick={() => handleNavClick("contact")}
          className="bg-[#4F583D] hover:bg-green-900 rounded-full text-white flex items-center"
        >
          Kontaktieren Sie uns <ArrowRightIcon className="w-5 h-5 text-white ml-2" />
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          <button onClick={() => handleNavClick("hero")} className="text-lg font-semibold">
            Home
          </button>
          <button onClick={() => handleNavClick("menu")} className="text-lg font-semibold">
            Menu
          </button>
          <button onClick={() => handleNavClick("about")} className="text-lg font-semibold">
            About Us
          </button>
          <Button
            onClick={() => handleNavClick("contact")}
            className="bg-[#4F583D] hover:bg-green-900 rounded-full text-white mt-2"
          >
            Kontaktieren Sie uns
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
