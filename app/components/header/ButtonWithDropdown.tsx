"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

type ButtonWDropType = {
  text: string;
  btnStyles?: string;
};

export const ButtonWithDropdown = ({ text, btnStyles }: ButtonWDropType) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <motion.div
      variants={{
        hover: {
          backgroundColor: "#191e25",
          color: "white",
          transition: { duration: 0 },
        },
      }}
      whileHover="hover"
      className={`flex relative h-full md:text-lg ${btnStyles} ${
        isOpen && "!bg-[#191e25]"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onTouchEnd={() => setIsOpen((prev) => !prev)}
    >
      <button
        className={`flex items-center gap-1 px-3 xl:px-4 hover:text-white ${
          currentPath === `/${text.toLowerCase()}`
            ? "text-inherit border-b-[3px] border-white"
            : "text-muted"
        }`}
      >
        {text}
        <motion.div
          variants={{
            hover: {
              rotate: 180,
              transition: { type: "spring", duration: 0.3 },
            },
          }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <IoChevronDown className="w-3 h-3 xl:w-5 xl:h-5 transform translate-y-0.5" />
        </motion.div>
      </button>
      <div
        className={`flex-col bg-[#191e25] rounded-b-lg h-screen lg:h-fit w-screen lg:w-full top-full text-muted absolute lg:shadow-custom ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="p-3 hover:bg-white hover:text-black whitespace-nowrap hidden lg:inline"
        >
          All
        </Link>
        <Link
          href="/"
          className="p-3 hover:bg-white hover:text-black whitespace-nowrap hidden lg:inline"
        >
          Movies
        </Link>
        <Link
          href="/"
          className="p-3 hover:bg-white hover:text-black whitespace-nowrap hidden lg:inline"
        >
          TV shows
        </Link>
        <Link
          href="/"
          className="p-3 hover:bg-white hover:text-black whitespace-nowrap rounded-b-lg hidden lg:inline"
        >
          Sports
        </Link>
      </div>
    </motion.div>
  );
};
