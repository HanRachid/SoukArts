import bola from "../assets/home/popularProducts/bola.png";
import wssadat from "../assets/home/popularProducts/wssadat.png";
import zarbya from "../assets/home/popularProducts/zarbya.png";
import balghinat from "../assets/home/popularProducts/balghinat.png";
import sac from "../assets/home/popularProducts/sac.png";
import { GoChevronRight } from "react-icons/go";


export default function PopularProducts() {
  return (
    <div className="px-10">
      <div className="w-full h-[900px] grid grid-cols-3 grid-rows-2 px-28 pt-40 gap-10">
        <div className="col-span-1 row-span-1 flex items-center font-primary font-medium text-[80px] text-colorBrown">
          Popular products
        </div>
        <div className="col-span-1 row-span-1 border-2 border-black rounded-3xl overflow-hidden relative ">
          <p className="bg-colorBeige/50 px-5 py-4 absolute top-0">1300 dh</p>
          <img src={bola} alt="" className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 border-2 border-black rounded-3xl overflow-hidden">
          <img src={wssadat} alt="" className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 border-2 border-black rounded-3xl overflow-hidden">
          <img src={zarbya} alt="" className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 border-2 border-black rounded-3xl overflow-hidden">
          <img src={balghinat} alt="" className="h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 border-2 border-black rounded-3xl overflow-hidden">
          <img src={sac} alt="" className="h-full w-full" />
        </div>
      </div>
     <div className="w-full flex justify-end px-28 py-16 ">
     <button className="flex items-center justify-center">
          <span className="text-colorBrown font-medium">Explore More Featured shops</span>
          <GoChevronRight className="h-6 w-auto" />
        </button>
     </div>
    </div>
  );
}
