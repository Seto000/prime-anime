import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";

import { ButtonWithDropdown } from "./ButtonWithDropdown";
import { ProfileButton } from "./ProfileButton";
import { LinkWithLabel } from "./LinkWithLabel";
import { SearchButton } from "./SearchButton";
import { subCategories } from "./subCategoriesData";

export const HeaderChildren = () => {
  return (
    <>
      <div className="flex items-center justify-between h-12 lg:justify-center lg:h-10 xl:h-12 bg-blue1 lg:rounded-lg lg:pl-4 2xl:h-14">
        <ButtonWithDropdown
          text="Menu"
          btnStyles="lg:hidden text-white relative"
          useMobile
        />
        <Link href="/home" className="text-lg lg:mr-12 xl:text-xl 2xl:text-2xl">
          prime anime
        </Link>
        <ButtonWithDropdown
          text="Home"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
          desktopIcons={[
            { label: "All", href: "/" },
            { label: "Movies", href: "/" },
            { label: "TV shows", href: "/" },
            { label: "Sports", href: "/" },
          ]}
        />
        <ButtonWithDropdown
          text="Store"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
          desktopIcons={[
            { label: "All", href: "/" },
            { label: "Rent or buy", href: "/" },
            { label: "Channels", href: "/" },
          ]}
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
          desktopIcons={subCategories}
        />
        <ButtonWithDropdown
          text="My Stuff"
          btnStyles="hidden lg:flex lg:text-base xl:text-xl"
          desktopIcons={[
            { label: "All", href: "/" },
            { label: "Watchlist", href: "/" },
            { label: "Purchases & Rentals", href: "/" },
          ]}
        />
        <div className="flex items-center h-full pl-3 lg:ml-8">
          <SearchButton />
          <ProfileButton />
        </div>
      </div>
      <div className="flex items-center h-12 pl-3 md:pl-5 text-muted font-semibold lg:hidden header-gradient">
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
