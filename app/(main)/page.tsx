import Image from "next/image";
import Link from "next/link";

import pfp from "../../public/pfp.jpg";
import { ButtonWithDropdown } from "../components/header/ButtonWithDropdown";
import { LinkWithLabel } from "../components/header/LinkWithLabel";

export default function Home() {
  return (
    <header className="text-white font-bold">
      <div className="flex items-center justify-between h-12">
        <ButtonWithDropdown text="Menu" />
        <h1 className="text-lg">prime anime</h1>
        <div className="flex gap-4 items-center h-full px-3">
          <button className="h-full px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={2}
              stroke="#b3b4b7"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <Link href="/" className="flex items-center px-3 h-full">
            <Image
              src={pfp}
              alt="Profile picture"
              className="rounded-full w-6 h-6"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 h-12 pl-6 text-muted font-semibold">
        <LinkWithLabel>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible w-3.5 h-3.5 md:w-4 md:h-4 text-white"
          >
            <path
              d="M11.648 2.070 C 11.552 2.110,9.467 3.704,6.858 5.734 C 2.942 8.780,2.223 9.355,2.130 9.514 L 2.020 9.700 2.009 15.414 C 2.002 19.278,2.012 21.177,2.041 21.282 C 2.102 21.509,2.313 21.761,2.539 21.878 L 2.738 21.980 5.936 21.991 C 9.548 22.003,9.387 22.015,9.700 21.702 C 10.002 21.400,10.000 21.420,10.000 19.073 L 10.000 17.000 11.999 17.000 L 13.997 17.000 14.009 19.150 L 14.020 21.300 14.131 21.489 C 14.192 21.592,14.301 21.723,14.374 21.778 C 14.672 22.006,14.578 22.000,17.998 22.000 C 21.546 22.000,21.389 22.013,21.702 21.700 C 22.024 21.378,22.002 21.848,21.991 15.418 L 21.980 9.700 21.870 9.514 C 21.778 9.356,21.059 8.781,17.170 5.755 C 14.646 3.790,12.509 2.147,12.422 2.103 C 12.209 1.996,11.866 1.981,11.648 2.070 M16.020 7.395 L 20.000 10.491 20.000 15.245 L 20.000 20.000 18.000 20.000 L 16.000 20.000 16.000 17.500 L 16.000 15.000 12.000 15.000 L 8.000 15.000 8.000 17.500 L 8.000 20.000 6.000 20.000 L 4.000 20.000 4.000 15.246 L 4.000 10.491 7.990 7.386 C 10.184 5.679,11.993 4.286,12.010 4.291 C 12.026 4.296,13.831 5.693,16.020 7.395 "
              fill="currentColor"
              stroke="none"
              fill-rule="evenodd"
            ></path>
          </svg>
        </LinkWithLabel>
        <LinkWithLabel>Movies</LinkWithLabel>
        <LinkWithLabel>TV shows</LinkWithLabel>
        <LinkWithLabel>Sports</LinkWithLabel>
      </div>
    </header>
  );
}
