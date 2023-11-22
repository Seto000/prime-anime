"use client";

import { useState, useEffect } from "react";

type HeaderType = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderType) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full lg:w-fit lg:mx-auto text-white font-bold sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled && "lg:top-2 xl:top-3"
      }`}
    >
      {children}
    </header>
  );
};
