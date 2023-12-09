import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiPlus } from "react-icons/pi";
import { LuInfo } from "react-icons/lu";
import { IoIosCheckmarkCircle } from "react-icons/io";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";
import { AnimatedButton } from "../UI/AnimatedButton";
import { PlayButton } from "../UI/PlayButton";

type CarouselItemType = {
  heroImg: string;
  titleImg: string;
  mRating: string;
};

export const CarouselItem = ({
  heroImg,
  titleImg,
  mRating,
}: CarouselItemType) => {
  useSwiperNavAnimation(0);

  return (
    <motion.div className="mx-auto aspect-video lg:aspect-[3/1] w-screen max-w-[92%] relative">
      <Image
        fill
        src={heroImg}
        alt="Image title"
        sizes="92vw"
        className="object-cover rounded-lg object-top"
        quality={100}
        priority
      />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.6,
            stiffness: 150,
            delay: 0.2,
          },
        }}
        className="w-full flex flex-col absolute z-10 bottom-0 pl-6 pr-3 pb-2 md:pr-4 md:pb-4 lg:max-w-[37%] 2xl:max-w-[34%] lg:top-[20%] 2xl:top-[30%] lg:pl-9 xl:pl-12 lg:pr-0 lg:pb-0"
      >
        <h2 className="max-w-[65%] lg:max-w-[75%] xl:max-w-full">
          <Link href="/">
            <Image
              width={1097}
              height={140}
              src={titleImg}
              sizes="(min-width: 1540px) calc(31.23vw - 47px), (min-width: 1280px) calc(33.75vw - 44px), (min-width: 1040px) calc(25.45vw - 26px), (min-width: 420px) calc(57.33vw - 13px), calc(48vw + 12px)"
              alt="Change this later"
              quality={100}
              priority
            />
          </Link>
        </h2>
        <div className="flex lg:gap-2 text-white font-bold text-sm md:text-base xl:text-lg mt-4 lg:mt-12 xl:mt-16">
          <div className="mb-2 lg:mb-3 flex items-center">
            <IoIosCheckmarkCircle className="h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 mr-1 text-[#1a98ff]" />
            <span>Included with Prime</span>
          </div>
          <span className="ml-auto lg:ml-0">
            <Image
              className="h-6 w-6 md:h-7 md:w-7"
              width={64}
              height={64}
              src={mRating}
              alt="Maturity Rating"
              quality={100}
              priority
            />
          </span>
        </div>
        <div className="hidden lg:flex lg:gap-4 xl:gap-6 lg:items-center">
          <PlayButton
            href="/"
            iconStyles="h-10 w-10 xl:h-12 xl:w-12"
            linkStyles="p-4"
          />
          <span className="text-white font-bold text-lg xl:text-xl">Play</span>
          <div>
            <AnimatedButton padding="p-4">
              <PiPlus className="h-8 w-8 xl:h-9 xl:w-9" />
            </AnimatedButton>
            <AnimatedButton padding="p-4">
              <LuInfo className="h-8 w-8 xl:h-9 xl:w-9" />
            </AnimatedButton>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
