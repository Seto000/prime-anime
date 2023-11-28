"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import useSwiperNavAnimation from "@/app/hooks/useSwiperNavAnimation";

export const MiniCarousel = () => {
  useSwiperNavAnimation(1);

  return (
    <section className="">
      <h2 className="text-white font-bold ml-3.5 md:ml-7 lg:ml-10 xl:ml-16 2xl:ml-20 pb-2 md:text-lg xl:text-xl">
        Continue watching
      </h2>
      <Swiper
        speed={800}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        slidesPerView={1.65}
        spaceBetween={15}
        breakpoints={{
          601: { slidesPerView: 3.15 },
          1024: { slidesPerView: 4.15 },
          1440: { slidesPerView: 5.15 },
          1800: { slidesPerView: 6.15 },
        }}
        className="!px-3.5 md:!px-7 lg:!px-10 xl:!px-16 2xl:!px-20"
      >
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-600 rounded-lg aspect-video"></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
