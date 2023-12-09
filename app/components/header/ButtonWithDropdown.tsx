"use client";

import { usePathname } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";

type ButtonWDropType = {
  text: string;
  btnStyles?: string;
};

export const ButtonWithDropdown = ({ text, btnStyles }: ButtonWDropType) => {
  const currentPath = usePathname();

  return (
    <button
      className={`flex items-center gap-1 px-3 h-full md:text-lg ${btnStyles} ${
        currentPath === `/${text.toLowerCase()}`
          ? "text-inherit border-b-[3px] border-white"
          : "text-muted"
      }`}
    >
      {text}
      <IoChevronDown className="w-3 h-3 xl:w-5 xl:h-5 transform translate-y-0.5" />
    </button>
  );
};
