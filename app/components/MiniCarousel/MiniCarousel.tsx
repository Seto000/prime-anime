"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Keyboard } from "swiper/modules";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";

type Breakpoints = Record<number, { slidesPerView: number }>;

type MiniCarouselType = {
  navAnimation: number;
  sectionTitle: string;
  aspectRatio: string;
  swiperConfig: {
    slidesPerView: number;
    breakpoints: Breakpoints;
  };
};

export const MiniCarousel = ({
  navAnimation,
  sectionTitle,
  aspectRatio,
  swiperConfig,
}: MiniCarouselType) => {
  useSwiperNavAnimation(navAnimation);

  return (
    <section className="">
      <h2 className="text-white font-bold ml-3.5 md:ml-7 lg:ml-10 xl:ml-16 2xl:ml-20 pb-2 md:text-lg xl:text-xl">
        {sectionTitle}
      </h2>
      <Swiper
        speed={800}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        slidesPerView={swiperConfig.slidesPerView}
        spaceBetween={15}
        breakpoints={swiperConfig.breakpoints}
        className="!px-3.5 md:!px-7 lg:!px-10 xl:!px-16 2xl:!px-20"
      >
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-red-600 rounded-lg ${aspectRatio}`}></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
