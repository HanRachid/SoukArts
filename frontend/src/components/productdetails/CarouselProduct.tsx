import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import HeartSVG from "../../assets/navbar/heart.svg?react";
import AddCollection from "../../assets/icons/AddCollectin.svg?react";
import { Image } from "antd";

interface CarouselProductProps {
  images: string[];
}

export default function CarouselProduct({ images }: CarouselProductProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let setOutsideActiveIndex: any;
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
            <Image
              src={image}
              alt={`image ${index + 1}`}
              width={853}
              height={669}
              className="h-full w-full object-cover"
              key={index}
            />
            <button className="absolute end-11 top-12 z-10  hover:bg-white/60 hover:scale-[1.06] ">
              <div className="relative group">
                <div className="w-11 h-11 rounded-full bg-white p-1.5 text-gray-900 transition absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <HeartSVG className="absolute w-6 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 font-secondary group-hover:fill-colorGold group-hover:scale-110" />
              </div>
            </button>
            <button className="absolute end-11 top-28 z-10  hover:bg-white/60 hover:scale-[1.06] ">
              <div className="relative group">
                <div className="w-11 h-11 rounded-full bg-white p-1.5 text-gray-900 transition absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <AddCollection className="absolute w-6 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 font-secondary group-hover:fill-colorGold group-hover:scale-110" />
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
