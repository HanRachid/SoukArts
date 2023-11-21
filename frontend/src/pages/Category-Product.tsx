// import Images
import categories from "./data/categories";
// import image1 from "../assets/rugs/image 1.webp";
// import image2 from "../assets/rugs/image 5.webp";
// import image3 from "../assets/rugs/image 3.jfif";
// import image4 from "../assets/rugs/image 4.jpg";

import rug1 from "../assets/rugs/rug 9.jpg";
import rug2 from "../assets/rugs/rug 11.jpg";
import rug3 from "../assets/rugs/rug 13.jpg";
import rug4 from "../assets/rugs/rug 5.webp";
import rug5 from "../assets/rugs/rug 7.webp";

const rugs = [rug2, rug3, rug4, rug5];

// import Components
import HeroSlider from "../components/HeroSlider";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { Filter } from "../components/filter";

export default function ProductsList() {
  const { category } = useParams();
  const selectedCategory = categories.find(
    (c) => c.name === category?.toLowerCase()
  );
  const subcategories = selectedCategory?.subcategory;
  useEffect(() => {
    console.log(subcategories);
  });
  return (
    <>
      <div className="m-[244px] mt-8 ">
        <HeroSlider images={selectedCategory?.images}>
          {category?.toUpperCase()} CATEGORIES
        </HeroSlider>
        <div>
          <h1 className="font-primary text-heading tracking-wide pt-8">
            Most Loved
          </h1>
          <div className="flex  gap-6">
            <div>
              <ProductCard isFirstCard={true} isNew={true} image={rug1} />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              {rugs.map((rug) => {
                return (
                  <ProductCard isFirstCard={false} isNew={false} image={rug} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 border-b border-gray-500 my-4"></div>
        <div className="flex justify-around mt-16">
          {subcategories?.map((subcategory) => (
            <div className="w-32 flex flex-col justify-center">
              <div className="h-32 w-32 rounded-full border-2 overflow-hidden border-colorBlack">
                <img
                  src={subcategory?.image}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <p className="mt-3 font-secondary text-center text-lg text-colorBlack">
                {subcategory?.name}
              </p>
            </div>
          ))}
        </div>
        <Filter />
      </div>
    </>
  );
}
