import { Carousel } from "@/app/components/Carousel/Carousel";
import { MiniCarousel } from "@/app/components/MiniCarousel/MiniCarousel";

export default function Home() {
  return (
    <>
      <div className="mb-6 lg:mb-9 xl:mb-12">
        <Carousel />
      </div>
      <div className="mb-6 lg:mb-9 xl:mb-12">
        <MiniCarousel />
      </div>
    </>
  );
}
