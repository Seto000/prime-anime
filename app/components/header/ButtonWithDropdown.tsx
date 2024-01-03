"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

import { rotateChevron } from "@/app/utils/animations";
import { mobileIcons } from "./mobileIconsData";

type HrefLabel = {
  href: string;
  label: string;
};

type ButtonWDropType = {
  text: string;
  btnStyles?: string;
  useMobile?: boolean;
  desktopIcons?: HrefLabel[] | { label: string; links: HrefLabel[] }[];
};

export const ButtonWithDropdown = ({
  text,
  btnStyles,
  useMobile = false,
  desktopIcons,
}: ButtonWDropType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);
  const currentPath = usePathname();

  const subMenuHandler = (labelToToggle: string) => {
    setOpenSubMenus((prevSubMenus) =>
      prevSubMenus.includes(labelToToggle)
        ? prevSubMenus.filter((label) => label !== labelToToggle)
        : [...prevSubMenus, labelToToggle]
    );
  };

  return (
    <motion.div
      variants={{
        hover: {
          backgroundColor: "#191e25",
          color: "#ffff",
          transition: { duration: 0 },
        },
      }}
      whileHover="hover"
      className={`flex h-full md:text-lg ${btnStyles} ${
        isOpen && "!bg-[#191e25]"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onTouchEnd={() => setIsOpen((prev) => !prev)}
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
          animate={rotateChevron(isOpen)}
        >
          <IoChevronDown className="w-3 h-3 xl:w-5 xl:h-5 transform translate-y-0.5" />
        </motion.div>
      </button>
      <div
        className={`${
          desktopIcons?.some((item) => "links" in item)
            ? "flex justify-evenly lg:w-full left-1/2 -translate-x-1/2"
            : "flex-col lg:w-fit "
        } bg-[#191e25] rounded-b-lg h-screen lg:h-fit w-screen top-full text-muted absolute lg:shadow-custom z-10 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {useMobile &&
          mobileIcons?.map((item, i) =>
            item.href ? (
              <Link
                key={i}
                href={item.href}
                className="flex lg:hidden items-center gap-2 pl-6 min-h-[48px]"
              >
                <item.Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {item.label}
              </Link>
            ) : (
              <>
                <button
                  key={i}
                  className="flex lg:hidden items-center gap-2 pl-6 min-h-[48px]"
                  onClick={() => subMenuHandler(item.label)}
                >
                  <item.Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {item.label}
                  <motion.div
                    animate={rotateChevron(openSubMenus.includes(item.label))}
                  >
                    <IoChevronDown className="w-3 h-3" />
                  </motion.div>
                </button>
                {openSubMenus.includes(item.label) &&
                  item.subCategories &&
                  item.subCategories.map((subCategory, j) => (
                    <>
                      <button
                        key={j}
                        className="flex lg:hidden items-center gap-2 pl-10 min-h-[48px]"
                        onClick={() => subMenuHandler(subCategory.label)}
                      >
                        {subCategory.label}
                        <motion.div
                          animate={rotateChevron(
                            openSubMenus.includes(subCategory.label)
                          )}
                        >
                          <IoChevronDown className="w-3 h-3" />
                        </motion.div>
                      </button>
                      {openSubMenus.includes(subCategory.label) &&
                        subCategory.links &&
                        subCategory.links.map((link, k) => (
                          <Link
                            key={k}
                            href={link.href}
                            className="flex lg:hidden items-center bg-[#33373d] py-1 pl-14 pr-1 min-h-[48px] font-thin"
                          >
                            {link.label}
                          </Link>
                        ))}
                    </>
                  ))}
              </>
            )
          )}
        {!useMobile &&
          desktopIcons?.map((item, i, arr) =>
            "links" in item ? (
              <div key={i} className="pl-4 py-2 whitespace-nowrap">
                <span className="py-2 xl:py-3 text-white text-lg">{item.label}</span>
                <ul>
                  {item.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="p-2 xl:p-3 block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={i}
                href={"href" in item ? item.href : ""}
                className={`p-2 xl:p-3 hover:bg-white hover:text-black whitespace-nowrap hidden lg:inline ${
                  arr.length - 1 === i && "rounded-b-lg"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
      </div>
    </motion.div>
  );
};
