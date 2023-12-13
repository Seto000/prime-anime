import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type BigCardType = {
  index: number;
};

export const BigCard = ({ index }: BigCardType) => {
  const [showVideoIndex, setShowVideoIndex] = useState<number | null>(null);
  const [widthToAnimate, setWidthToAnimate] = useState(0);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slide = document.querySelectorAll(
      ".swiper-wrapper"
    ) as NodeListOf<HTMLDivElement>;
    const height = slide[2].offsetHeight;
    setWidthToAnimate(height * 1.77778);
  }, []);

  const handleMouseLeave = (index: number) => {
    const timeout = setTimeout(() => {
      setShowVideoIndex(null);
    }, 300);
    setLeaveTimeout(timeout);
  };

  const handleMouseEnter = (index: number) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setShowVideoIndex(index);
  };

  return (
    <motion.div
      animate={
        showVideoIndex === index
          ? {
              width: widthToAnimate,
              aspectRatio: 16 / 9,
            }
          : {}
      }
      style={{
        aspectRatio: 2 / 3,
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      className={`bg-sky-600 rounded-lg w-[42vw] aspect-[2/3] md:w-[29vw] lg:w-[22vw] xl:w-[17.6vw] 2xl:w-[14.9vw]`}
    />
  );
};
