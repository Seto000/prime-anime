import { Carousel } from "@/app/components/Carousel/Carousel";
import { MiniCarousel } from "@/app/components/MiniCarousel/MiniCarousel";

export default function Home() {
  return (
    <>
      <div className="mb-6 lg:mb-9 xl:mb-12" id="swiperParent">
        <Carousel />
      </div>
      <div className="mb-6 lg:mb-9 xl:mb-12" id="swiperParent">
        <MiniCarousel
          navAnimation={1}
          sectionTitle="Continue watching"
          aspectRatio="aspect-video"
          swiperConfig={{
            slidesPerView: 1.65,
            breakpoints: {
              601: { slidesPerView: 3.15 },
              1024: { slidesPerView: 4.15 },
              1440: { slidesPerView: 5.15 },
              1800: { slidesPerView: 6.15 },
            },
          }}
        />
      </div>
      <div className="mb-6 lg:mb-9 xl:mb-12" id="swiperParent">
        <MiniCarousel
          navAnimation={2}
          sectionTitle="Originals and Exclusives"
          aspectRatio="aspect-[2/3]"
          swiperConfig={{
            slidesPerView: 2.15,
            breakpoints: {
              601: { slidesPerView: 3.15 },
              1024: { slidesPerView: 4.15 },
              1440: { slidesPerView: 5.15 },
              1800: { slidesPerView: 6.15 },
            },
          }}
        />
      </div>
    </>
  );
}
