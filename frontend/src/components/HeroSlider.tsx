//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./css/HeroSlider.css";

//required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default function HeroSlider({
  image1,
  image2,
  image3,
  image4,
  children,
}: {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-col items-center h-screen relative mt-[160px]">
      <h1 className="font-primary  text-[100px] absolute top-[-80px] z-10 tracking-wide">
        {children}
      </h1>
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
        <SwiperSlide>
          <img src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image3} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={image4} alt="image4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
