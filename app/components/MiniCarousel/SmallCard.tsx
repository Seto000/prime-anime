import Image from "next/image";
import { motion } from "framer-motion";
import { PiPlus } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { PlayButton } from "../UI/PlayButton";
import { AnimatedButton } from "../UI/AnimatedButton";

export const SmallCard = () => {
  return (
    <motion.div variants={{ hover: { scale: 1.25 } }} whileHover="hover">
      <motion.div
        variants={{
          hover: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
        className={`bg-red-600 rounded-lg w-[55vw] aspect-video md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
      />
      <motion.div
        style={{ opacity: 0, pointerEvents: "none" }}
        variants={{
          hover: {
            opacity: 1,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            pointerEvents: "all",
          },
        }}
        className="bg-black text-white font-bold text-sm px-4 pb-4 pt-3 absolute h-fit w-full"
      >
        <div className="flex items-center">
          <IoIosCheckmarkCircle className="h-4 w-4 md:h-5 md:w-5 text-[#1a98ff]" />
          <span>Included with Prime</span>
        </div>
        <div className="flex items-center mt-3">
          <PlayButton
            href="/"
            iconStyles="h-6 w-6 xl:h-6 xl:w-6"
            linkStyles="p-3"
          />
          <span className="text-white font-bold text-base ml-3">Resume</span>
          <div className="ml-auto">
            <AnimatedButton padding="p-2">
              <PiPlus className="h-2 w-2 xl:h-5 xl:w-5" />
            </AnimatedButton>
            <AnimatedButton padding="p-2">
              <IoMdMore className="h-2 w-2 xl:h-5 xl:w-5" />
            </AnimatedButton>
          </div>
        </div>
        <h4 className="mt-2 text-base">Title</h4>
        <div className="flex items-center gap-3 mt-3 text-muted">
          <span>2023</span>
          <span>1 h 38 min</span>
          <span>
            <Image
              className="h-5 w-5 md:h-6 md:w-6"
              width={64}
              height={64}
              src="https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/12._SY64_FMpng_.png"
              alt="Maturity Rating"
              quality={100}
              priority
            />
          </span>
        </div>
        <div className="mt-2 text-muted text-base">Description...</div>
      </motion.div>
    </motion.div>
  );
};
