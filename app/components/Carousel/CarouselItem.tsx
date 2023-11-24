import Image from "next/image";
import Link from "next/link";

export const CarouselItem = () => {
  return (
    <div className="mx-auto aspect-video lg:aspect-[3/1] max-w-[92%] relative">
      <Image
        fill
        src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Uncharted_CleanSlate/aec693f9-c199-4617-bd5a-a51c82266e4b._UR1920,1080_AGaverage_SX1920_FMwebp_.jpeg"
        alt="Image title"
        sizes="(min-width: 420px) 92.02vw, calc(74vw + 54px)"
        className="object-cover rounded-lg object-top"
        quality={100}
      />
      <section className="w-full flex flex-col absolute z-10 bottom-0 pl-6 pr-3 pb-2 lg:max-w-[37%] 2xl:max-w-[34%] lg:top-[20%] 2xl:top-[30%] lg:pl-9 xl:pl-12 lg:pr-0 lg:pb-0">
        <h2 className="max-w-[65%] lg:max-w-full">
          <Link href="/">
            <Image
              width={1097}
              height={140}
              src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Uncharted_CleanSlate/54164464-ed83-4d13-a80b-645305f522d8._AC_SX1000_FMwebp_.png"
              alt="Change this later"
              quality={100}
            />
          </Link>
        </h2>
        <div className="flex lg:gap-2 text-white font-bold text-sm md:text-base xl:text-lg mt-4 lg:mt-12 xl:mt-16">
          <div className="mb-2 lg:mb-3">
            <span className="mr-3">SVG</span>
            <span>Included with Prime</span>
          </div>
          <span className="ml-auto lg:ml-0">Rating</span>
        </div>
        <div className="hidden lg:flex lg:gap-4 xl:gap-6 lg:items-center">
          <Link href="/" className="rounded-full bg-white p-4">
            <svg
              className="h-10 w-10 xl:h-12 xl:w-12"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <title>Play</title>
              <svg
                className="h-10 w-10 xl:h-12 xl:w-12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.643 3.069 C 6.546 3.103,6.392 3.206,6.300 3.298 C 5.973 3.624,6.000 2.855,6.000 12.000 C 6.000 21.144,5.974 20.376,6.299 20.701 C 6.568 20.970,6.964 21.065,7.308 20.944 C 7.580 20.848,20.606 12.815,20.748 12.656 C 21.074 12.289,21.074 11.710,20.748 11.345 C 20.607 11.188,7.572 3.150,7.305 3.055 C 7.107 2.985,6.867 2.990,6.643 3.069 "
                  fill="currentColor"
                  stroke="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </svg>
          </Link>
          <span className="text-white font-bold text-lg xl:text-xl">Play</span>
          <div>
            <button className="rounded-full text-white active:bg-white active:text-black p-4">
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
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </svg>
            </button>
            <button className="rounded-full text-white active:bg-white active:text-black p-4">
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
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
