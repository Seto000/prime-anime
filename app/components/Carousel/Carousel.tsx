"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  return (
    <Swiper
      speed={800}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      modules={[Navigation, Pagination, Keyboard]}
    >
      <SwiperSlide>
        <CarouselItem
          heroImg="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Uncharted_CleanSlate/aec693f9-c199-4617-bd5a-a51c82266e4b._UR1920,1080_AGaverage_SX1920_FMwebp_.jpeg"
          titleImg="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Uncharted_CleanSlate/54164464-ed83-4d13-a80b-645305f522d8._AC_SX1000_FMwebp_.png"
          mRating="https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/12._SY64_FMpng_.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          heroImg="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_InvincibleS2_CleanSlate/1314776a-52e3-4f13-a1be-ac1ead2d881b._UR3840,1440_AGaverage_SX1440_FMwebp_.jpeg"
          titleImg="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_InvincibleS2_CleanSlate/29597cda-e562-47d7-8d07-dbe80e80e3e3._AC_SX1000_FMwebp_.png"
          mRating="https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/adjctq/a18._SY64_FMpng_.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};
