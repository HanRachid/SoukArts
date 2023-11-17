// import Images
import image1 from "../assets/Rug.jpg";
import image2 from "../assets/boho-living-room-design-091922.jpg.webp";
import image3 from "../assets/interior-trend-southwest-desert-chic-style-boho-3.jpg";
import image4 from "../assets/styl-boho.jpg";

import rug1 from "../assets/rugs/rug 9.jpg";
import rug2 from "../assets/rugs/rug 11.jpg";
import rug3 from "../assets/rugs/rug 13.jpg";
import rug4 from "../assets/rugs/rug 5.webp";
import rug5 from "../assets/rugs/rug 7.webp";

const rugs = [rug2, rug3, rug4, rug5];

// import Components
import HeroSlider from "../components/HeroSlider";
import { EcommerceCard } from "../components/Card";
import { useParams } from "react-router-dom";

export default function ProductsList() {
  const { category } = useParams();
  return (
    <>
      <div className="m-[244px] mt-8 ">
        <HeroSlider
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
        >
          {category?.toUpperCase()} CATEGORIES
        </HeroSlider>
        <div>
          <h1 className="font-primary text-heading tracking-wide pt-8">
            Most Loved
          </h1>

          <div className="flex justify-center  gap-6">
            <div>
              <EcommerceCard isFirstCard={true} image={rug1} />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              {rugs.map((rug) => {
                return <EcommerceCard isFirstCard={false} image={rug} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
