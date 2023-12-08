import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

//import images
import HeartSVG from "../../assets/navbar/heart.svg?react";
import star from "../../assets/icons/icons8-star-50.png";

const ProductTitle =
  "Beni ourain Custom Moroccan rug - Berber Beni ourain rug - Wool area rug - Handmade rug - Moroccan area rug - Morocco rug";

export default function StoreCard({
  image,
  isNew,
}: {
  image: string;
  isNew: boolean;
}) {
  return (
    <>
      <div className="group relative overflow-hidden w-[305.9px] h-[335px] font-secondary flex flex-col rounded-xl shadow-md">
        <Link to="#">
          <button className="absolute end-7 top-8 z-10  hover:bg-white/60 hover:scale-[1.06] ">
            <div className="relative group">
              <div className="w-7 h-7 rounded-full bg-white p-1.5 text-gray-900 transition absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <HeartSVG className="absolute w-4 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 font-secondary hover:fill-colorGold hover:scale-110" />
            </div>
          </button>
          <img
            src={image}
            alt="product-image"
            className={
              "h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            }
          />

          <div className="relative border border-gray-100 bg-white pt-2 p-2 rounded-br-xl rounded-bl-xl">
            <span
              className={`whitespace-nowrap bg-colorGold px-2 py-1 text-xs font-medium text-white ${
                isNew ? "" : "hidden"
              }`}
            >
              New
            </span>
            <h3
              className="mt-1 font-medium font-secondary text-lg text-gray-900 tooltip"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={ProductTitle}
            >
              {ProductTitle.length > 29
                ? ProductTitle.substring(0, 29) + "..."
                : ProductTitle}
            </h3>
            <div className="flex justify-between">
              <h4 className="mt-[-0.1rem] text-sm font-light text-black-900 opacity-70 font-secondary">
                By MarrakechGallery
              </h4>

              <p className="mt-2.5 text-lg text-colorGold">600 DH</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 font-bold text-black">
                <img width="15" height="15" src={star} alt="star" />
                <p className="font-medium text-base text-black">4.7 (1.5K)</p>
              </div>
              <p className="font-thin text-sm font-secondary text-colorGold">
                <span className="line-through">1700DH</span>(60%)
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
}
