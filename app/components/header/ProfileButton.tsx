"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";

import pfp from "@/public/pfp.jpg";

export const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="h-full relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onTouchEnd={() => setIsOpen((prev) => !prev)}
          className="flex items-center px-3 h-full hover:bg-[#191e25] lg:group-hover:rounded-tr-lg"
        >
          <p className="mr-4 text-muted text-lg hidden xl:block">Gabriel</p>
          <Image
            src={pfp}
            alt="Profile picture"
            className="rounded-full w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
          />
        </button>
        <div
          className={`bg-[#191e25] h-screen w-screen lg:h-fit lg:w-fit absolute top-full z-10 right-0 rounded-b-lg flex-col lg:flex-row lg:shadow-custom ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="pl-3 py-1 lg:pl-4 lg:py-2 xl:pl-6 xl:py-3 w-full">
            <div className="min-h-[48px] lg:min-h-[38px] xl:py-3 flex items-center text-lg md:text-xl lg:text-lg xl:text-[22px] whitespace-nowrap">
              Your account
            </div>
            <ul className="text-muted pl-3 lg:pl-0 whitespace-nowrap md:text-lg lg:text-base xl:text-xl">
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Help
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Watch Anywyhere
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Account & Settings
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Prime Benefits
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <div className="pl-3 py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-3 w-full">
            <div className="min-h-[48px] lg:min-h-[38px] xl:py-3 flex items-center text-lg md:text-xl lg:text-lg xl:text-[22px] whitespace-nowrap">
              Profiles
            </div>
            <ul className="text-muted pl-3 lg:pl-0 whitespace-nowrap md:text-lg lg:text-base xl:text-xl">
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[46px] xl:min-h-[56px] flex items-center w-full"
                >
                  <Image
                    src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png"
                    alt="Kids Icon"
                    width={48}
                    height={48}
                    className="h-6 w-6 lg:h-[30px] lg:w-[30px] xl:h-8 xl:w-8 mr-1"
                  />
                  Kids
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2 group">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[46px] xl:min-h-[56px] flex items-center w-full"
                >
                  <span className="flex items-center justify-center bg-[#33373d] group-hover:bg-[#ccc8c2] group-hover:text-black text-white h-6 w-6 lg:h-[30px] lg:w-[30px] xl:h-8 xl:w-8 rounded-full mr-1">
                    <PiPlus />
                  </span>
                  Add New
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Manage profiles
                </Link>
              </li>
              <li className="h-full flex lg:hover:bg-white lg:hover:text-black lg:rounded-lg lg:px-2">
                <Link
                  href="/"
                  className="min-h-[48px] lg:min-h-[38px] xl:min-h-[49px] flex items-center w-full"
                >
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
