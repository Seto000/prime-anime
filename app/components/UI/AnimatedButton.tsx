import { motion } from "framer-motion";

import { scaleUp, scaleDown } from "@/app/utils/animations";

type AnimatedButtonType = {
  children: React.ReactNode;
  padding?: string;
};

export const AnimatedButton = ({ children, padding }: AnimatedButtonType) => {
  return (
    <motion.button
      whileHover={scaleUp}
      whileTap={scaleDown}
      className={`rounded-full text-white active:bg-white active:text-black ${padding} mButton mr-2 transition-colors duration-300`}
    >
      {children}
    </motion.button>
  );
};
