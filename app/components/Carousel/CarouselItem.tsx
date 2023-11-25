import Image from "next/image";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

type CarouselItemType = {
  heroImg: string;
  titleImg: string;
  mRating: string;
};

export const CarouselItem = ({
  heroImg,
  titleImg,
  mRating,
}: CarouselItemType) => {
  const [_, animate] = useAnimate();

  const scaleUp = { scale: 1.1 };
  const scaleDown = { scale: 0.9 };

  useEffect(() => {
    const elem1 = document.querySelector(
      ".swiper-button-prev"
    ) as HTMLDivElement;
    const elem2 = document.querySelector(
      ".swiper-button-next"
    ) as HTMLDivElement;
    elem1.onmouseenter = () => animate(elem1, { scale: 1.5 });
    elem1.onmouseleave = () => animate(elem1, { scale: 1 });
    elem2.onmouseenter = () => animate(elem2, { scale: 1.5 });
    elem2.onmouseleave = () => animate(elem2, { scale: 1 });
  }, [animate]);

  return (
    <motion.div className="mx-auto aspect-video lg:aspect-[3/1] max-w-[92%] relative">
      <Image
        fill
        src={heroImg}
        alt="Image title"
        sizes="92vw"
        className="object-cover rounded-lg object-top"
        quality={100}
        priority
      />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.6,
            stiffness: 150,
            delay: 0.2,
          },
        }}
        className="w-full flex flex-col absolute z-10 bottom-0 pl-6 pr-3 pb-2 md:pr-4 md:pb-4 lg:max-w-[37%] 2xl:max-w-[34%] lg:top-[20%] 2xl:top-[30%] lg:pl-9 xl:pl-12 lg:pr-0 lg:pb-0"
      >
        <h2 className="max-w-[65%] lg:max-w-[75%] xl:max-w-full">
          <Link href="/">
            <Image
              width={1097}
              height={140}
              src={titleImg}
              sizes="(min-width: 1540px) calc(31.23vw - 47px), (min-width: 1040px) 31.46vw, (min-width: 440px) calc(59.83vw - 23px), 50vw"
              alt="Change this later"
              quality={100}
              priority
            />
          </Link>
        </h2>
        <div className="flex lg:gap-2 text-white font-bold text-sm md:text-base xl:text-lg mt-4 lg:mt-12 xl:mt-16">
          <div className="mb-2 lg:mb-3 flex items-center">
            <svg
              className="mr-1 h-4 w-4 md:h-5 md:w-5"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <title>Entitled</title>
              <svg
                width="24"
                height="24"
                fill="none"
                color="#1a98ff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.120 2.039 C 8.641 2.287,6.414 3.362,4.761 5.107 C 1.806 8.228,1.158 12.819,3.137 16.623 C 3.620 17.552,4.164 18.288,4.938 19.061 C 5.930 20.051,7.038 20.789,8.272 21.278 C 11.634 22.610,15.313 22.080,18.200 19.845 C 18.637 19.507,19.507 18.637,19.845 18.200 C 21.256 16.378,22.000 14.236,22.000 12.000 C 22.000 7.432,18.842 3.387,14.430 2.303 C 13.446 2.062,12.028 1.948,11.120 2.039 M17.092 8.191 C 17.410 8.341,17.660 8.592,17.816 8.920 C 17.926 9.151,17.940 9.221,17.940 9.541 C 17.940 9.869,17.928 9.927,17.805 10.181 C 17.679 10.443,17.480 10.651,14.545 13.588 C 11.578 16.558,11.406 16.723,11.140 16.848 C 10.888 16.967,10.824 16.980,10.500 16.980 C 10.176 16.980,10.112 16.967,9.860 16.848 C 9.604 16.726,9.466 16.600,8.193 15.328 C 6.915 14.051,6.794 13.918,6.672 13.660 C 6.554 13.408,6.540 13.344,6.540 13.020 C 6.540 12.700,6.554 12.631,6.664 12.400 C 6.821 12.070,7.070 11.821,7.400 11.664 C 7.631 11.554,7.700 11.540,8.020 11.540 C 8.343 11.540,8.408 11.554,8.654 11.670 C 8.891 11.782,9.036 11.907,9.714 12.578 L 10.500 13.356 13.020 10.843 C 15.629 8.240,15.687 8.188,16.110 8.081 C 16.380 8.013,16.817 8.061,17.092 8.191 "
                  fill="currentColor"
                  stroke="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </svg>
            <span>Included with Prime</span>
          </div>
          <span className="ml-auto lg:ml-0">
            <Image
              className="h-6 w-6 md:h-7 md:w-7"
              width={64}
              height={64}
              src={mRating}
              alt="Maturity Rating"
            />
          </span>
        </div>
        <div className="hidden lg:flex lg:gap-4 xl:gap-6 lg:items-center">
          <motion.span
            whileHover={scaleUp}
            whileTap={scaleDown}
            className="flex rounded-full bg-white group"
          >
            <Link href="/" className="p-4">
              <svg
                className="h-10 w-10 xl:h-12 xl:w-12"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <title>Play</title>
                <svg
                  className="h-10 w-10 xl:h-12 xl:w-12 fill-black group-hover:fill-[#4d4d4d]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.643 3.069 C 6.546 3.103,6.392 3.206,6.300 3.298 C 5.973 3.624,6.000 2.855,6.000 12.000 C 6.000 21.144,5.974 20.376,6.299 20.701 C 6.568 20.970,6.964 21.065,7.308 20.944 C 7.580 20.848,20.606 12.815,20.748 12.656 C 21.074 12.289,21.074 11.710,20.748 11.345 C 20.607 11.188,7.572 3.150,7.305 3.055 C 7.107 2.985,6.867 2.990,6.643 3.069 "
                    stroke="none"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </svg>
            </Link>
          </motion.span>
          <span className="text-white font-bold text-lg xl:text-xl">Play</span>
          <div>
            <motion.button
              whileHover={scaleUp}
              whileTap={scaleDown}
              className="rounded-full text-white active:bg-white active:text-black p-4"
            >
              <svg
                className="h-7 w-7 xl:h-8 xl:w-8"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <title>Add</title>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700 11.009 6.850 L 10.999 11.000 6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000 11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000 17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000 13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 "
                    fill="currentColor"
                    stroke="none"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </svg>
            </motion.button>
            <motion.button
              whileHover={scaleUp}
              whileTap={scaleDown}
              className="rounded-full text-white active:bg-white active:text-black p-4"
            >
              <svg
                className="h-7 w-7 xl:h-8 xl:w-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.120 2.039 C 8.641 2.287,6.414 3.362,4.761 5.107 C 1.806 8.228,1.158 12.819,3.137 16.623 C 3.620 17.552,4.164 18.288,4.938 19.061 C 5.930 20.051,7.038 20.789,8.272 21.278 C 11.634 22.610,15.313 22.080,18.200 19.845 C 18.637 19.507,19.507 18.637,19.845 18.200 C 21.256 16.378,22.000 14.236,22.000 12.000 C 22.000 7.432,18.842 3.387,14.430 2.303 C 13.446 2.062,12.028 1.948,11.120 2.039 M12.740 4.041 C 15.525 4.302,17.953 5.983,19.182 8.500 C 20.655 11.514,20.091 15.104,17.765 17.530 C 16.248 19.111,14.175 19.999,12.000 19.999 C 8.235 19.999,4.948 17.331,4.177 13.648 C 3.426 10.057,5.201 6.431,8.501 4.817 C 9.822 4.170,11.277 3.904,12.740 4.041 M11.000 8.000 L 11.000 9.000 12.000 9.000 L 13.000 9.000 13.000 8.000 L 13.000 7.000 12.000 7.000 L 11.000 7.000 11.000 8.000 M11.000 13.570 C 11.000 15.217,11.015 16.194,11.042 16.289 C 11.103 16.509,11.315 16.762,11.531 16.874 C 11.932 17.080,12.390 17.012,12.700 16.702 C 13.008 16.394,13.000 16.478,13.000 13.573 L 13.000 11.000 12.000 11.000 L 11.000 11.000 11.000 13.570 "
                  fill="currentColor"
                  stroke="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
