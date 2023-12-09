"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

type ButtonWDropType = {
  text: string;
  btnStyles?: string;
};

export const ButtonWithDropdown = ({ text, btnStyles }: ButtonWDropType) => {
  const currentPath = usePathname();

  return (
    <motion.button
      variants={{
        hover: { backgroundColor: "#191e25" },
      }}
      whileHover="hover"
      className={`flex items-center gap-1 px-3 h-full md:text-lg ${btnStyles} ${
        currentPath === `/${text.toLowerCase()}`
          ? "text-inherit border-b-[3px] border-white"
          : "text-muted"
      }`}
    >
      {text}
      <motion.div
        variants={{
          hover: { rotate: 180, transition: { type: "spring", duration: 0.3 } },
        }}
      >
        <IoChevronDown className="w-3 h-3 xl:w-5 xl:h-5 transform translate-y-0.5" />
      </motion.div>
    </motion.button>
  );
};
