import { Carousel } from "@/app/components/Carousel/Carousel";
import MiniCarousel from "@/app/components/MiniCarousel/MiniCarousel";
// import Test from "./Test";

// const MiniCarousel = dynamic(() => import("@/app/components/MiniCarousel/MiniCarousel"), {ssr: false})

export default function Home() {
  return (
    <>
      <section className="mb-6 lg:mb-9 xl:mb-12" id="swiperParent">
        <Carousel />
      </section>
      <section className="overflow-x-auto py-96 -my-96" id="swiperParent">
        <MiniCarousel
          navAnimation={1}
          sectionTitle="Continue watching"
          widthControl="w-[55vw] aspect-video"
          animate={false}
        />
      </section>
      <section
        className="overflow-x-auto mt-6 lg:mt-9 xl:mt-12"
        id="swiperParent"
      >
        <MiniCarousel
          navAnimation={2}
          sectionTitle="Originals and Exclusives"
          widthControl="w-[42vw] aspect-[2/3]"
          animate={true}
        />
      </section>
    </>
  );
}
