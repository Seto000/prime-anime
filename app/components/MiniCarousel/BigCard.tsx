import { useRef, useState } from "react";
import { motion } from "framer-motion";

type BigCardType = {
  index: number;
};

export const BigCard = ({ index }: BigCardType) => {
  const [showVideoIndex, setShowVideoIndex] = useState<number | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const [width, setWidth] = useState<number>();

  const cardRef = useRef<HTMLDivElement>(null);

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

    const height = cardRef.current?.offsetHeight;
    if (height) {
      setWidth(height * 1.77778);
    }

    setShowVideoIndex(index);
  };

  return (
    <motion.div
      ref={cardRef}
      animate={
        showVideoIndex === index
          ? {
              width: width,
              aspectRatio: 16 / 9,
            }
          : {}
      }
      style={{
        width: "var(--width-to)",
        aspectRatio: 2 / 3,
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      className={`bg-sky-600 rounded-lg [--width-to:42vw] md:[--width-to:29vw] lg:[--width-to:22vw] xl:[--width-to:17.6vw] 2xl:[--width-to:14.9vw]`}
      data-testid="big-card"
    />
  );
};
