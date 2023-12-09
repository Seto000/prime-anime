import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";

import { ButtonWithDropdown } from "./ButtonWithDropdown";
import { LinkWithLabel } from "./LinkWithLabel";
import pfp from "../../../public/pfp.jpg";

export const HeaderChildren = () => {
  return (
    <>
      <div className="flex items-center justify-between h-12 lg:justify-center lg:h-10 xl:h-12 xl:gap-3.5 bg-blue1 lg:rounded-lg lg:pl-4 2xl:h-14">
        <ButtonWithDropdown text="Menu" btnStyles="lg:hidden text-white" />
        <Link href="/home" className="text-lg lg:mr-8 xl:text-xl 2xl:text-2xl">
          prime anime
        </Link>
        <ButtonWithDropdown
          text="Home"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
        />
        <ButtonWithDropdown
          text="Store"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
        />
        <LinkWithLabel
          href="/"
          text="live tv"
          linkStyles="hidden lg:flex lg:text-base xl:text-xl"
        >
          Live TV
        </LinkWithLabel>
        <ButtonWithDropdown
          text="Categories"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
        />
        <ButtonWithDropdown
          text="My Stuff"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
        />
        <div className="flex gap-4 items-center h-full px-3 lg:ml-8">
          <button className="h-full px-1">
            <IoSearch className="w-7 h-7 2xl:w-8 2xl:h-8 text-muted" />
          </button>
          <button className="flex items-center px-3 h-full">
            <p className="mr-4 text-muted text-lg hidden xl:block">Gabriel</p>
            <Image
              src={pfp}
              alt="Profile picture"
              className="rounded-full w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 h-12 pl-6 text-muted font-semibold lg:hidden header-gradient">
        <LinkWithLabel href="/" text="svg">
          <GrHomeRounded className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </LinkWithLabel>
        <LinkWithLabel href="/" text="movies">
          Movies
        </LinkWithLabel>
        <LinkWithLabel href="/" text="tv shows">
          TV shows
        </LinkWithLabel>
        <LinkWithLabel href="/" text="sports">
          Sports
        </LinkWithLabel>
      </div>
    </>
  );
};
