import { GoChevronRight } from "react-icons/go";
import sandala from "../assets/home/sndala.png";

export default function FeaturesShop() {
  return (
    <div className="w-full mt-20 px-20 mx-auto pb-20">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-7xl mb-20 font-fontPrimary text-colorBrown ">FEATURED SHOPS</h1>
        <button className="flex items-center justify-center">
          <span className="text-colorBrown">Explore More Featured shops</span>
          <GoChevronRight className="h-6 w-auto" />
        </button>
      </div>
      <div className="w-full h-[550px] gap-4 grid grid-cols-3 grid-rows-2 p-10">
        <div className="col-span-1 overflow-hidden row-span-2 relative bg-colorBeige rounded-t-3xl rounded-bl-3xl border-2 border-black">
          <img src={sandala} alt="" className="h-full w-full" />
          <button className="w-full py-3 absolute bottom-0 left-0 border-t-2 border-black">
            ByMikwi
          </button>
        </div>
        <div className="col-span-1 row-span-1 bg-yellow-600"></div>
        <div className="col-span-1 row-span-1 bg-yellow-600"></div>
        <div className="col-span-2 row-span-1 bg-green-600"></div>
      </div>
    </div>
  );
}
