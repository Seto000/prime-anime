"use client";

import { usePathname } from "next/navigation";

export const ButtonWithDropdown = ({
  text,
  btnStyles,
}: {
  text: string;
  btnStyles: string;
}) => {
  const currentPath = usePathname();

  return (
    <button
      className={`flex items-center gap-1 px-3 h-full md:text-lg ${btnStyles} ${
        currentPath === `/${text.toLowerCase()}` ? "text-inherit border-b-[3px] border-white" : "text-muted"
      }`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-3 h-3 transform translate-y-0.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
};
