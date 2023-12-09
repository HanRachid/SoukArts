import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ButtonOutlined from "../productdetails/ButtonOutlined";

//import images
import classicPic from "../../assets/home/ShopByStyle/classic.webp";
import modernPic from "../../assets/home/ShopByStyle/Modern.jpg";
import bohoPic from "../../assets/home/ShopByStyle/Boho.jpg";
import fusionPic from "../../assets/home/ShopByStyle/Fusion.jpg";

const ShopByStyle = () => {
  return (
    <>
      <div>
        <h1 className="text-7xl mb-14 ml-36 mt-9 font-primary text-colorBlack tracking-widest">
          Shop by style
        </h1>
      </div>
      <div className="bg-colorBeigeLight/67">
        <HorizontalScrollCarousel />
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-transparent">
      <div className="sticky top-0 flex  h-screen  overflow-hidden border-2 border-colorBlack ">
        <motion.div style={{ x }} className="flex gap-0">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group flex items-center gap-11 relative w-screen overflow-hidden bg-transparent  border-r-2 border-colorBlack"
    >
      <div className="h-full w-[50%]">
        <img
          src={card.image}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap- items-center w-[50%]">
        <div className="flex flex-col gap-16 w-[574px]">
          <h2 className="font-primary text-9xl tracking-widest text-colorBlack">
            {card.title}
          </h2>
          <p className="font-secondary text-lg tracking-wider text-colorBlack">
            {card.description}
          </p>
          <ButtonOutlined>Shop Products</ButtonOutlined>
          <span className="border-none hover:text-colorGold font-secondary tracking-widest text-base hover:cursor-pointer">
            Scroll <ArrowForwardIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopByStyle;

type CardType = {
  image: string;
  title: string;
  description: string;
  id: number;
};
const cards: CardType[] = [
  {
    image: classicPic,
    title: "CLASSIC",
    description:
      "Classic Moroccan style is deeply rooted in the rich cultural heritage of Morocco. It embraces traditional elements and craftsmanship,creating a warm and inviting atmosphere.",
    id: 1,
  },
  {
    image: modernPic,
    title: "MODERN",
    description:
      "Modern style, also known as contemporary style, emphasizes simplicity, clean lines, and minimalism. It embraces functionality while focusing on open spaces and natural light.",
    id: 2,
  },
  {
    image: bohoPic,
    title: "BOHO",
    description:
      "Boho, short for bohemian, is a style that celebrates a free-spirited and unconventional approach to design. It draws inspiration from various cultures and eras, resulting in a vibrant and eclectic aesthetic. Boho interiors are characterized by a mix of patterns, textures, and colors. You might find vintage furniture, macramé wall hangings, layered textiles, and plenty of plants. The color palette often includes rich jewel tones, earthy hues, and pops of vibrant shades. The boho style exudes a relaxed and whimsical vibe, encouraging self-expression and a laid-back lifestyle.",
    id: 3,
  },
  {
    image: fusionPic,
    title: "FUSION",
    description:
      "Fusion style combines the traditional elements of Moroccan design with the sleekness and simplicity of modern aesthetics. It blends the characteristic features of both styles to create a unique and harmonious look. In a fusion interior, you might find traditional Moroccan patterns and colors combined with modern furniture, clean lines, and contemporary materials. This style allows for a creative mix of old and new, resulting in a balanced and eclectic space that showcases cultural influences while embracing modern sensibilities.",
    id: 4,
  },
];
