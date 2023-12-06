import { motion } from "framer-motion";

import { scaleUp, scaleDown } from "@/app/utils/animations";

export const AnimatedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      whileHover={scaleUp}
      whileTap={scaleDown}
      className="rounded-full text-white active:bg-white active:text-black p-4 mButton mr-2 transition-colors duration-300"
    >
      {children}
    </motion.button>
  );
};
