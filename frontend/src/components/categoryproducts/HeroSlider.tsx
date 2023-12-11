// framer motion
import { motion } from "framer-motion";

//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../css/HeroSlider.css";

//required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default function HeroSlider({
  images,
  children,
}: {
  images: string[] | undefined;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-col items-center h-screen relative mt-[160px]">
      <motion.h1
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="font-primary  text-[100px] absolute top-[-80px] z-10 tracking-wide"
      >
        {children}
      </motion.h1>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        {images?.map((image, id) => (
          <SwiperSlide key={id} className="rounded-b-3xl">
            <img src={image} alt="image1" className="rounded-b-3xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
