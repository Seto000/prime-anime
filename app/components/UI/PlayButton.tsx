import Link from "next/link";
import { motion } from "framer-motion";

import { scaleUp, scaleDown } from "@/app/utils/animations";

type PlayButtonType = {
  href: string;
  sizes: string;
  padding: string;
};

export const PlayButton = ({ href, sizes, padding }: PlayButtonType) => {
  return (
    <motion.span
      whileHover={scaleUp}
      whileTap={scaleDown}
      className="flex rounded-full bg-white group "
    >
      <Link href={href} className={padding}>
        <svg
          className={sizes}
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <title>Play</title>
          <svg
            className={`${sizes} fill-black group-hover:fill-[#4d4d4d] transition-colors duration-300`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.643 3.069 C 6.546 3.103,6.392 3.206,6.300 3.298 C 5.973 3.624,6.000 2.855,6.000 12.000 C 6.000 21.144,5.974 20.376,6.299 20.701 C 6.568 20.970,6.964 21.065,7.308 20.944 C 7.580 20.848,20.606 12.815,20.748 12.656 C 21.074 12.289,21.074 11.710,20.748 11.345 C 20.607 11.188,7.572 3.150,7.305 3.055 C 7.107 2.985,6.867 2.990,6.643 3.069 "
              stroke="none"
              fillRule="evenodd"
            ></path>
          </svg>
        </svg>
      </Link>
    </motion.span>
  );
};
