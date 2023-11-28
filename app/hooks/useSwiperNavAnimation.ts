import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';

function useSwiperNavAnimation(selector: number) {
 const [_, animate] = useAnimate();

 useEffect(() => {
   const elems1 = document.querySelectorAll(".swiper-button-prev");
   const elems2 = document.querySelectorAll(".swiper-button-next");

   if (elems1 && elems2) {
    const elem1 = elems1[selector] as HTMLDivElement;
    const elem2 = elems2[selector] as HTMLDivElement;

     elem1.onmouseenter = () => animate(elem1, { scale: 1.5 });
     elem1.onmouseleave = () => animate(elem1, { scale: 1 });
     elem2.onmouseenter = () => animate(elem2, { scale: 1.5 });
     elem2.onmouseleave = () => animate(elem2, { scale: 1 });
   }
 }, [animate, selector]);
}

export default useSwiperNavAnimation;