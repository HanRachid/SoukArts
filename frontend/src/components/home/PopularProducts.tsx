import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

import bola from "../../assets/home/popularProducts/bola.png";
import wssadat from "../../assets/home/popularProducts/wssadat.png";
import zarbya from "../../assets/home/popularProducts/zarbya.png";
import balghinat from "../../assets/home/popularProducts/balghinat.png";
import sac from "../../assets/home/popularProducts/sac.png";
import { Card, Typography } from "@material-tailwind/react";

const products = [
  { image: bola, price: "1300 DH" },
  { image: wssadat, price: "500 DH" },
  { image: zarbya, price: "2000 DH" },
  { image: balghinat, price: "350 DH" },
  { image: sac, price: "1500 DH" },
];

export default function PopularProducts() {
  return (
    <div className="lg:px-10">
      <div className="w-full grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-1 lg:px-28 md:px-16 px-16 pt-40 gap-x-8 gap-y-4">
        <div className="col-span-1 row-span-1 flex items-center font-primary font-medium lg:text-[3.5rem] md:text-[3.75rem] text-[4.5rem] text-colorBrown">
          <motion.span
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">Popular </span>products
          </motion.span>
        </div>
        {products.map((product, index) => (
          <motion.span className="col-span-1 row-span-1" initial={{scale: 1}} whileHover={{scale: 1.05}} transition={{duration: 0.5}}>
            <Card
              key={index}
              className="cursor-pointer border-2 border-neutral-950 rounded-2xl overflow-hidden relative"
            >
              {product.price && (
                <span className="absolute bottom-4 left-4 bg-colorBeigeLight/40 px-6 py-2.5 backdrop-blur-md rounded">
                  <Typography variant="lead" className="text-gray-900">
                    {product.price}
                  </Typography>
                </span>
              )}
              <img src={product.image} alt="" className="h-full w-full" />
            </Card>
          </motion.span>
        ))}
      </div>
      <div className="w-full flex lg:justify-end lg:px-28 py-10 px-16 ">
        <button className="lg:w-full flex lg:text-end items-center justify-center">
          <Typography color="brown" variant="paragraph">
            Explore More Featured shops
          </Typography>
          <GoChevronRight className="h-6 w-auto text-brown-600" />
        </button>
      </div>
    </div>
  );
}
