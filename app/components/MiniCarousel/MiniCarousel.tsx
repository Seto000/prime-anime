"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";

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
  const [showVideoIndex, setShowVideoIndex] = useState<number | null>(null);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  useSwiperNavAnimation(navAnimation);

  useEffect(() => {
    const slide = document.querySelectorAll(
      ".swiper-wrapper"
    ) as NodeListOf<HTMLDivElement>;
    const height = slide[2].offsetHeight;
    setCarouselHeight(height);
  }, []);

  const handleMouseLeave = (index: number) => {
    const timeout = setTimeout(() => {
      setShowVideoIndex(null);
    }, 300);
    setLeaveTimeout(timeout);
  };

  const handleMouseEnter = (index: number) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setShowVideoIndex(index);
  };

  const slidesArray = new Array(12).fill(null);

  return (
    <section>
      <h2 className="text-white font-bold ml-3.5 md:ml-7 lg:ml-10 xl:ml-16 2xl:ml-20 pb-2 md:text-lg xl:text-xl">
        {sectionTitle}
      </h2>
      <Swiper
        speed={800}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        slidesPerView={"auto"}
        spaceBetween={15}
        className="!px-3.5 md:!px-7 lg:!px-10 xl:!px-16 2xl:!px-20"
        watchSlidesProgress
        slideToClickedSlide
      >
        {slidesArray.map((slide, index) => (
          <SwiperSlide key={index}>
            {animate ? (
              <motion.div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`bg-cyan-600 rounded-lg ${
                  showVideoIndex === index ? "aspect-video" : widthControl
                } md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
                style={
                  showVideoIndex === index
                    ? { width: `calc(${carouselHeight}px*1.77778)` }
                    : {}
                }
              />
            ) : (
              <div
                className={`bg-red-600 rounded-lg ${widthControl} md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MiniCarousel;
