"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";
import { SmallCard } from "./SmallCard";

type MiniCarouselType = {
  navAnimation: number;
  sectionTitle: string;
  animate: boolean;
};

const MiniCarousel = ({
  navAnimation,
  sectionTitle,
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
                className={`bg-sky-600 rounded-lg w-[42vw] aspect-[2/3] md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
              />
            ) : (
              <SmallCard />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MiniCarousel;
