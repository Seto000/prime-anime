"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export const Carousel = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      injectStyles={[
        `.swiper-button-prev, .swiper-button-next {
            color: red;
        }`,
      ]}
    >
      <SwiperSlide>
        <div className="bg-red-600 mx-auto rounded-lg aspect-video lg:aspect-[3/1] max-w-[92%]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-600 mx-auto rounded-lg aspect-video lg:aspect-[3/1] max-w-[92%]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-600 mx-auto rounded-lg aspect-video lg:aspect-[3/1] max-w-[92%]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-600 mx-auto rounded-lg aspect-video lg:aspect-[3/1] max-w-[92%]"></div>
      </SwiperSlide>
    </Swiper>
  );
};
