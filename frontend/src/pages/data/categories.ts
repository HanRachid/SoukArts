// images for the heroSlider
import rug1 from "../../assets/rugs/image 1.webp";
import rug2 from "../../assets/rugs/image 5.webp";
import rug3 from "../../assets/rugs/image 3.jfif";
import rug4 from "../../assets/rugs/image 4.jpg";
import pouf1 from "../../assets/Poufs/pouf 1.webp";
import pouf2 from "../../assets/Poufs/Pouf 2.jpg";
import pouf3 from "../../assets/Poufs/pouf 3.webp";
import pouf4 from "../../assets/Poufs/pouf 4.jpg";

// images for the subcategories rugs
import azilal from "../../assets/rugs/TYPES DE TAPIS/AZILAL.webp";
import boucherouite from "../../assets/rugs/TYPES DE TAPIS/boucherouite-rugs-02.webp";
import kilim from "../../assets/rugs/TYPES DE TAPIS/Moroccan Kilim Rugs.webp";
import Taznakht from "../../assets/rugs/TYPES DE TAPIS/Taznakht Rugs.webp";
import Boujad from "../../assets/rugs/TYPES DE TAPIS/aventyr-moroccan-boujad-wool-rug-maleek-1.jpg";
import Zanafi from "../../assets/rugs/rug 8.jpg";
import BeniOurain from "../../assets/rugs/rug 7.webp";
// images for the subcategories poufs
import Round from "../../assets/Poufs/round.jpg";
import BousherPouf from "../../assets/Poufs/BousherPouf.webp";
import KilimPouf from "../../assets/Poufs/kilim.webp";
import Square from "../../assets/Poufs/square.avif";

type category = {
  name: string;
  images: string[];
  subcategory: { name: string; image: string }[];
};
const categories: category[] = [
  {
    name: "rugs",
    images: [rug1, rug2, rug3, rug4],
    subcategory: [
      { name: "Azilal Rugs", image: azilal },
      { name: "Boucherouite Rugs", image: boucherouite },
      { name: "Kilim Rugs", image: kilim },
      { name: "Taznakht Rugs", image: Taznakht },
      { name: "Boujad Rugs", image: Boujad },
      { name: "Zanafi Rugs", image: Zanafi },
      { name: "Beni Ourain Rugs", image: BeniOurain },
    ],
  },
  {
    name: "poufs",
    images: [pouf1, pouf2, pouf3, pouf4],
    subcategory: [
      { name: "Round Leather Poufs", image: Round },
      { name: "Boucherouite Poufs", image: BousherPouf },
      { name: "Square Leather Poufs", image: Square },
      { name: "Kilim Berber Poufs", image: KilimPouf },
    ],
  },
  // {
  //   name: "Lamps",
  //   images: [rug1, rug2, rug3, rug4],
  //   subcategory: [
  //     { name: "Pendant Lights", images: azilal },
  //     { name: "Table Lamps", images: boucherouite },
  //     { name: "Lampshades", images: kilim },
  //     { name: "Floor Lamps", images: Taznakht },
  //     { name: "Brass Lamps", images: Taznakht },
  //     { name: "Rattan Lamps", images: Taznakht },
  //   ],
  // },
];

export default categories;
