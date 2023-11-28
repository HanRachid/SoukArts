import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import HeartSVG from "../assets/navbar/heart.svg?react";

interface CarouselProductProps {
  images: string[];
}

export function CarouselProduct({ images }: CarouselProductProps) {
  let setOutsideActiveIndex: object;
  const [imageActiveIndex, setImageActiveIndex] = useState<number>(0);

  return (
    <>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => {
          setOutsideActiveIndex = setActiveIndex;
          setImageActiveIndex(activeIndex);
          return (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    setImageActiveIndex(i);
                    setActiveIndex(i);
                  }}
                />
              ))}
            </div>
          );
        }}
      >
        {images.map((image, index) => (
          <>
            <img
              src={image}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
              key={index}
            />
            <button className="absolute end-12 top-8 z-10  hover:bg-white/60 hover:scale-[1.06] ">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white p-1.5 text-gray-900 transition absolute"></div>
                <HeartSVG className="absolute w-8 end-[-2.4rem] top-[-3.7rem] font-secondary hover:fill-colorGold" />
              </div>
            </button>
          </>
        ))}
      </Carousel>
      <div className="flex gap-6 mt-7">
        {images.map((image, index) => (
          <img
            src={image}
            alt={`image ${index + 1}`}
            className={`w-[151px] rounded-md ${
              imageActiveIndex === index
                ? "outline-colorBlack overflow-hidden border-2 outline-3 outline -outline-offset-3 border-white"
                : ""
            }`}
            key={index}
            onClick={() => {
              setOutsideActiveIndex(index);
              setImageActiveIndex(index);
            }}
          />
        ))}
      </div>
    </>
  );
}
