"use client";

import React from "react";
import BejausLogo from "../../public/bejaus_02.svg";
// import BejausLogo from "../../public/bejaus_14-15.svg";
// import BejausLogo from "../../public/bejaus_02.svg";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  videoSrc: string;
  onButtonClick?: () => void;
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  videoSrc,
  onButtonClick,
}: HeroProps) {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />

      {/* Content Container */}
      <div className="relative h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <div className="relative">
            <div className="absolute top-0 left-0">
              <BejausLogo className="h-32 w-auto" />
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6 text-background">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-background">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-8">{subtitle}</p>
            <button
              onClick={onButtonClick}
              className="bg-accent text-background px-6 py-2 rounded hover:bg-primary hover:text-accent"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
