"use client";

import React from "react";

const Footer = () => (
  <footer id="contact" className="bg-[#6a755c] py-10 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  text-center md:text-left">
      
      {/* Left Section - Opening Hours */}
      <div>
        <h3 className="text-lg font-bold text-white">ÖFFNUNGSZEITEN:</h3>
        
        <p className=" text-white">Montag: 17:00–22:00 Uhr</p>
        <p className=" text-white">Dienstag & Mittwoch: Ruhetag</p>
        <p className=" text-white">Donnerstag–Samstag: 17:00–22:00 Uhr</p>

        <p className=" text-white">Sonntag: 11:30–15:00 Uhr & 16:00–22:00 Uhr</p>
      </div>

      {/* Center Section - Main Text */}
      <div className="text-center text-white">
      <p className="text-amber-100 italic font-bold text-l 4xl:text-base 4xl:text-lg mt-2 drop-shadow-lg">
  Reservierungen sind nur telefonisch möglich: <a href="tel:+4961679399988" className="underline text-l hover:text-yellow-400">+49 (0) 6167-9399988</a>
</p>
        <h2 className="text-2xl italic font-semibold text-white">Hunger?</h2>
      
        <p className="mt-2">Alt Allertshofen 58, <br /> 64397 Modautal-Allertshofen</p>
      </div>

      {/* Right Section - Contact & Image */}
      <div className="flex flex-col items-center md:items-end text-white">
        <img 
          src="/logo1.png" 
          alt="Flower" 
          className="w-20 h-20 mb-2 rounded-md"
        />
        <p>Tel.: +49 (0) 6167-9399988</p>
      </div>

    </div>
  </footer>
);

export default Footer;

