"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";
import { PlayButton } from "../UI/PlayButton";
import { AnimatedButton } from "../UI/AnimatedButton";

type MiniCarouselType = {
  navAnimation: number;
  sectionTitle: string;
  widthControl: string;
  animate: boolean;
};

const MiniCarousel = ({
  navAnimation,
  sectionTitle,
  widthControl,
  animate,
}: MiniCarouselType) => {
  const swiperRef = useRef() as any;
  const [showVideoIndex, setShowVideoIndex] = useState<number | null>(null);
  const [widthToAnimate, setWidthToAnimate] = useState(0);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  useSwiperNavAnimation(navAnimation);

  useEffect(() => {
    const slide = document.querySelectorAll(
      ".swiper-wrapper"
    ) as NodeListOf<HTMLDivElement>;
    const height = slide[2].offsetHeight;
    setWidthToAnimate(height * 1.77778);
  }, []);

  const handleMouseLeave = (index: number) => {
    const timeout = setTimeout(() => {
      setShowVideoIndex(null);
      // swiperRef.current.swiper.slideTo(index - 5);
    }, 300);
    setLeaveTimeout(timeout);
  };

  const handleMouseEnter = (index: number) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setShowVideoIndex(index);
    // swiperRef.current?.swiper.slideTo(index - 3);
  };

  const slidesArray = new Array(12).fill(null);

  return (
    <>
      <h2 className="text-white font-bold ml-3.5 md:ml-7 lg:ml-10 xl:ml-16 2xl:ml-20 pb-2 lg:pb-3 xl:pb-4 md:text-lg xl:text-xl">
        {sectionTitle}
      </h2>
      <Swiper
        ref={swiperRef}
        speed={800}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        slidesPerView={"auto"}
        spaceBetween={15}
        className={`!px-3.5 md:!px-7 lg:!px-10 xl:!px-16 2xl:!px-20 !overflow-visible ${
          animate ? "!z-10" : "!z-20"
        }`}
        loop
      >
        {slidesArray.map((slide, index) => (
          <SwiperSlide key={index}>
            {animate ? (
              <motion.div
                animate={
                  showVideoIndex === index
                    ? {
                        width: widthToAnimate,
                        aspectRatio: 16 / 9,
                      }
                    : {}
                }
                style={{
                  aspectRatio: 2 / 3,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`bg-sky-600 rounded-lg ${widthControl} md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
              />
            ) : (
              <motion.div
                variants={{ hover: { scale: 1.25 } }}
                whileHover="hover"
              >
                <motion.div
                  variants={{
                    hover: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  }}
                  className={`bg-red-600 rounded-lg ${widthControl} md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
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
                    <span className="text-white font-bold text-base ml-3">
                      Resume
                    </span>
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
                    <span >2023</span>
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
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MiniCarousel;
