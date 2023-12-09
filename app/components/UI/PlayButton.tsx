import Link from "next/link";
import { motion } from "framer-motion";
import { TbPlayerPlayFilled } from "react-icons/tb";

import { scaleUp, scaleDown } from "@/app/utils/animations";

type PlayButtonType = {
  href: string;
  iconStyles: string;
  linkStyles: string;
};

export const PlayButton = ({ href, iconStyles, linkStyles }: PlayButtonType) => {
  return (
    <motion.span
      whileHover={scaleUp}
      whileTap={scaleDown}
      className="flex rounded-full bg-white group"
    >
      <Link href={href} className={linkStyles}>
        <TbPlayerPlayFilled className={`text-black group-hover:text-[#4d4d4d] transition-colors duration-300 ${iconStyles}`}/>
      </Link>
    </motion.span>
  );
};
