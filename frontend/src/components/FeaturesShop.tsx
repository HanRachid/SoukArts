import { GoChevronRight } from "react-icons/go";
import sandala from "../assets/home/sndala.png";
import zarbya from "../assets/home/zarbya.png"
import bollat from "../assets/home/bollat.png"
import wssada from "../assets/home/wssada.png"

export default function FeaturesShop() {
  return (
    <div className="w-full mt-20 px-20 mx-auto pb-20">
      <div className="flex justify-between pb-20 items-center w-full px-10">
        <h1 className="text-7xl font-primary text-colorBrown ">FEATURED SHOPS</h1>
        <button className="flex items-center justify-center">
          <span className="text-colorBrown font-medium">Explore More Featured shops</span>
          <GoChevronRight className="h-6 w-auto" />
        </button>
      </div>
      <div className="w-full h-[550px] gap-4 grid grid-cols-3 grid-rows-2 px-10">
        <div className="col-span-1 overflow-hidden row-span-2 relative bg-colorBeige rounded-t-3xl rounded-bl-3xl border-2 border-black">
          <img src={sandala} alt="" className="h-full w-full" />
          <button className="w-full py-3 absolute bottom-0 left-0 border-t-2 border-black">
            ByMikwi
          </button>
        </div>
        <div className="col-span-1 row-span-1 rounded-tl-3xl overflow-hidden border-black border-2 relative">
          <img src={zarbya} alt="" className="h-full w-full" />
          <button className="w-full bottom-0 absolute py-3 border-t-2 border-black bg-colorBeige">
          NorthAfricanWeavers
          </button>
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden relative rounded-tr-3xl border-2 border-black">
          <img src={bollat} alt="" className="w-full h-full" />
          <button className="w-full absolute bottom-0 py-3 border-t-2 border-black bg-colorBeige">
          Homdiyhardware
          </button>
        </div>
        <div className="col-span-2 row-span-1 relative overflow-hidden border-2 border-black rounded-br-3xl">
          <img src={wssada} alt="" />
          <button className="w-full py-3 bg-colorBeige border-t-2 border-black absolute bottom-0">
          Marocainrie
          </button>
        </div>
      </div>
    </div>
  );
}
