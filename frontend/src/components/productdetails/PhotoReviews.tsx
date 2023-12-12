// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./../css/photorewiews.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

//import images
import imageReview1 from "../../assets/reviews images/image1.webp";
import imageReview2 from "../../assets/reviews images/image2.webp";
import imageReview3 from "../../assets/reviews images/image3.webp";
import imageReview4 from "../../assets/reviews images/image4.webp";
import imageReview5 from "../../assets/reviews images/image5.webp";

const imageReviews = [
  imageReview1,
  imageReview2,
  imageReview3,
  imageReview4,
  imageReview5,
];

export default function PhotoReviews() {
  return (
    <div className="h-40">
      <div>
        <h2 className="font-secondary text-xl tracking-wide">
          Photos From Reviews
        </h2>
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        pagination={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imageReviews.map((imageReview, id) => (
          <SwiperSlide key={id}>
            <img src={imageReview} alt="" />
          </SwiperSlide>
        ))}
        {/* Navigation Buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
