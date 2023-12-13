"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Keyboard } from "swiper/modules";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";
import { SmallCard } from "./SmallCard";
import { BigCard } from "./BigCard";

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
  useSwiperNavAnimation(navAnimation);

  const slidesArray = new Array(12).fill(null);

  return (
    <>
      <h2 className="text-white font-bold ml-3.5 md:ml-7 lg:ml-10 xl:ml-16 2xl:ml-20 pb-2 lg:pb-3 xl:pb-4 md:text-lg xl:text-xl">
        {sectionTitle}
      </h2>
      <Swiper
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
            {animate ? <BigCard index={index} /> : <SmallCard />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MiniCarousel;
