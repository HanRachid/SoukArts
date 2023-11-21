import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

//import images
import HeartSVG from "../assets/navbar/heart.svg?react";
import star from "../assets/icons/icons8-star-50.png";

const ProductTitle =
  "Beni ourain Custom Moroccan rug - Berber Beni ourain rug - Wool area rug - Handmade rug - Moroccan area rug - Morocco rug";

export default function ProductCard({
  isFirstCard,
  image,
  isNew,
}: {
  isFirstCard: boolean;
  image: string;
  isNew: boolean;
}) {
  const cardHeight = isFirstCard ? "h-[957px]" : "h-[466px]";
  const cardWidth = isFirstCard ? "w-[700px]" : "w-[333.5px]";
  const titleSize = isFirstCard ? "text-[2rem]" : "text-[1.1rem]";
  return (
    <>
      <div
        className={`group relative overflow-hidden ${cardWidth} ${cardHeight} font-secondary flex flex-col rounded-xl shadow-md`}
      >
        <Link to="#">
          <button
            className={`absolute ${
              isFirstCard ? "end-16 top-10" : "end-12 top-5"
            }  z-10  hover:bg-white/60 hover:scale-110 `}
          >
            <div className="relative">
              <div
                className={`${
                  isFirstCard ? "w-11 h-11" : "w-8 h-8"
                } rounded-full bg-white p-1.5 text-gray-900 transition absolute`}
              ></div>
              <HeartSVG
                className={`absolute  14 ${
                  isFirstCard
                    ? "w-8 end-[-2.29rem] top-[-3.6rem]"
                    : "w-6 end-[-1.7rem] top-[-4rem]"
                } font-secondary hover:fill-colorGold`}
              />
            </div>
          </button>
          <img
            src={image}
            alt="product-image"
            className={` ${
              isFirstCard ? "h-[687px]" : isNew ? "h-[250px]" : "h-[275px]"
            } w-full object-cover transition duration-500 group-hover:scale-105`}
          />

          <div className="relative border border-gray-100 bg-white pt-2 p-6 rounded-br-xl rounded-bl-xl">
            <span
              className={`whitespace-nowrap bg-colorGold px-3 py-1.5 text-xs font-medium text-white ${
                isNew ? "" : "hidden"
              }`}
            >
              New
            </span>
            <h3
              className={`mt-4 font-medium font-secondary ${titleSize} text-gray-900 tooltip`}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={ProductTitle}
            >
              {ProductTitle.length > (isFirstCard ? 38 : 29)
                ? ProductTitle.substring(0, isFirstCard ? 38 : 29) + "..."
                : ProductTitle}
            </h3>
            <div className="flex justify-between">
              <h4
                className={`-mt-1 ${
                  isFirstCard ? "text-medium" : "text-xs"
                } font-light text-black-900 opacity-70 font-secondary`}
              >
                By MarrakechGallery
              </h4>

              <p
                className={`mt-4 ${
                  isFirstCard ? "text-2xl" : "text-sm"
                } text-colorGold`}
              >
                600 DH
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 font-bold text-black">
                <img
                  width={isFirstCard ? "24" : "16"}
                  height={isFirstCard ? "24" : "16"}
                  src={star}
                  alt="star"
                />
                <p
                  className={`font-medium ${
                    isFirstCard ? "text-2xl" : "text-sm"
                  } text-black`}
                >
                  4.7 (1.5K)
                </p>
              </div>
              <p className="font-thin text-sm font-secondary text-colorGold">
                <span className="line-through">1700DH</span>(60%)
              </p>
            </div>
            <form className="mt-4">
              <button
                className={`${
                  isFirstCard
                    ? "h-[61px] text-[1.4rem]"
                    : "h-[44px] text-[1rem]"
                } block w-full rounded-tr-[10px] rounded-bl-[10px]  bg-colorGold text-white font-secondary font-normal medium transition hover:scale-105`}
              >
                Add to Cart
              </button>
            </form>
          </div>
        </Link>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
}
