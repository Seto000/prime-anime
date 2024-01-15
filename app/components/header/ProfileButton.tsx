"use client"

import Image from "next/image";
import { useState } from "react";

import pfp from "@/public/pfp.jpg";

export const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full">
      <button className="flex items-center px-3 h-full hover:bg-[#191e25] group-hover:rounded-r-lg">
        <p className="mr-4 text-muted text-lg hidden xl:block">Gabriel</p>
        <Image
          src={pfp}
          alt="Profile picture"
          className="rounded-full w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
        />
      </button>
    </div>
  );
};
