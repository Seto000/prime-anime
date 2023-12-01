import { Carousel } from "@/app/components/Carousel/Carousel";
import MiniCarousel from "@/app/components/MiniCarousel/MiniCarousel";

// const MiniCarousel = dynamic(() => import("@/app/components/MiniCarousel/MiniCarousel"), {ssr: false})

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
          widthControl="w-[55vw] aspect-video"
          animate={false}
        />
      </div>
      <div className="mb-6 lg:mb-9 xl:mb-12" id="swiperParent">
        <MiniCarousel
          navAnimation={2}
          sectionTitle="Originals and Exclusives"
          widthControl="w-[42vw] aspect-[2/3]"
          animate
        />
      </div>
    </>
  );
}
