"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";
import { CheckMarkSVG } from "../UI/CheckMarkSVG";
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
                  className="bg-black text-white font-bold text-sm px-4 pb-4 pt-3 absolute h-full w-full"
                >
                  <div className="flex items-center">
                    <CheckMarkSVG />
                    <span>Included with Prime</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <PlayButton
                      href="/"
                      sizes="h-6 w-6 xl:h-6 xl:w-6"
                      padding="p-3"
                    />
                    <span className="text-white font-bold text-base ml-3">
                      Resume
                    </span>
                    <div className="ml-auto">
                      <AnimatedButton padding="p-2.5">
                        <svg
                          className="h-3 w-3 xl:h-4 xl:w-4"
                          viewBox="0 0 24 24"
                          role="img"
                          aria-hidden="true"
                        >
                          <title>Add</title>
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700 11.009 6.850 L 10.999 11.000 6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000 11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000 17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000 13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 "
                              fill="currentColor"
                              stroke="none"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </svg>
                      </AnimatedButton>
                      <AnimatedButton padding="p-2.5">
                        <svg
                          className="h-3 w-3 xl:h-4 xl:w-4"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          role="img"
                          aria-hidden="true"
                        >
                          <title>More</title>
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.580 3.047 C 10.859 3.185,10.199 3.848,10.044 4.592 C 9.789 5.816,10.751 7.000,12.000 7.000 C 13.080 7.000,14.000 6.080,14.000 5.000 C 14.000 4.477,13.790 3.983,13.404 3.596 C 12.913 3.106,12.277 2.914,11.580 3.047 M11.580 10.047 C 10.707 10.214,10.000 11.087,10.000 12.000 C 10.000 12.920,10.690 13.768,11.592 13.956 C 12.816 14.211,14.000 13.249,14.000 12.000 C 14.000 11.477,13.790 10.983,13.404 10.596 C 12.913 10.106,12.277 9.914,11.580 10.047 M11.580 17.047 C 10.859 17.185,10.199 17.848,10.044 18.592 C 9.789 19.816,10.751 21.000,12.000 21.000 C 13.080 21.000,14.000 20.080,14.000 19.000 C 14.000 18.477,13.790 17.983,13.404 17.596 C 12.913 17.106,12.277 16.914,11.580 17.047 "
                              fill="currentColor"
                              stroke="none"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </svg>
                      </AnimatedButton>
                    </div>
                  </div>
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
