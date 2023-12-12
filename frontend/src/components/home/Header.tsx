import { motion } from "framer-motion";
import { CarouselHome } from "./carouselHome";

export default function Header() {
  return (
    <div className="w-full mt-6 flex flex-col items-center">
      <motion.h1
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-[5vw] leading-[5vw] text-center z-10  font-primary text-colorBlack"
      >
        Unleashing Moroccan Artistry.
      </motion.h1>
      {/* Carousel Here */}
      <CarouselHome />
    </div>
  );
}
