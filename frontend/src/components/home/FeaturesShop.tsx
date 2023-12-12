import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoChevronRight } from "react-icons/go";
import sandala from "../../assets/home/sndala.png";
import zarbya from "../../assets/home/zarbya.png";
import bollat from "../../assets/home/bollat.png";
import wssada from "../../assets/home/wssada.png";

export default function FeaturesShop() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={itemVariants}
      ref={ref}
      className="w-full h-auto mt-20 px-4 lg:px-20 pb-20"
    >
      <div className="w-full h-auto mt-20 px-2 xl:px-20 pb-20">
        <div className="flex flex-col xl:flex-row xl:justify-between pb-9 items-center w-full px-2 xl:px-10">
          <h1 className="text-5xl xl:text-7xl font-primary text-colorBrown ">
            FEATURED SHOPS
          </h1>
          <button className="flex items-center justify-center hover:transition-transform hover:translate-x-1 hover:text-colorGold">
            <span className="text-colorBrown font-medium hover:text-colorGold">
              Explore More Featured shops
            </span>
            <GoChevronRight className="h-6 w-auto" />
          </button>
        </div>
        <div className="w-full h-auto gap-4 grid grid-cols-1 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-1 overflow-hidden lg:row-span-2 h-80 lg:h-full relative rounded-t-3xl rounded-bl-3xl border-2 border-colorBlack">
            <img
              src={sandala}
              alt="sandala"
              className="h-full w-full object-cover"
            />
            <button className="w-full py-5 absolute bottom-0 left-0 border-t-2 hover:text-colorLight bg-colorBeige text-colorBlack border-colorBlack hover:bg-colorGold">
              ByMikwi
            </button>
          </div>
          <div className=" lg:col-span-1 lg:row-span-1 h-80 rounded-tl-3xl overflow-hidden border-2 border-colorBlack relative">
            <img
              src={zarbya}
              alt="rugs"
              className="h-full w-full object-cover"
            />
            <button className="w-full bottom-0 absolute py-5 border-t-2 hover:text-colorLight text-colorBlack border-colorBlack bg-colorBeige hover:bg-colorGold">
              NorthAfricanWeavers
            </button>
          </div>
          <div className=" lg:col-span-1 lg:row-span-1 h-80 overflow-hidden relative rounded-tr-3xl border-2 border-colorBlack">
            <img
              src={bollat}
              alt="lamp"
              className="w-full h-full object-cover"
            />
            <button className="w-full absolute bottom-0 py-5 border-t-2 hover:text-colorLight text-colorBlack border-colorBlack bg-colorBeige hover:bg-colorGold">
              Homdiyhardware
            </button>
          </div>
          <div className=" lg:col-span-2 lg:row-span-1 h-80 relative overflow-hidden border-2 border-colorBlack rounded-br-3xl">
            <img
              src={wssada}
              alt="pillow"
              className="w-full h-full object-cover"
            />
            <button className="w-full py-5 bg-colorBeige border-t-2 hover:text-colorLight text-colorBlack border-colorBlack absolute bottom-0 hover:bg-colorGold">
              Marocainrie
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
