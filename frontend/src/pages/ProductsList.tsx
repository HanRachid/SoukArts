import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
// import Components
import Filter from "../components/categoryproducts/Filter";
import HeroSlider from "../components/categoryproducts/HeroSlider";
import SelectOptions from "../components/categoryproducts/Select";
import ProductCard from "../components/categoryproducts/ProductCard";
import PopularCard from "../components/categoryproducts/PopularCard";
import { Pagination } from "@mui/material";
import RecentCard from "../components/categoryproducts/RecentCard";

// import Images
import categories from "./data/categories";
import Pouf1 from "../assets/Poufs/Pouf 2.jpg";
import jewelry3 from "../assets/jewelry/popular 2.jpg";
import lamp1 from "../assets/Lamps/lamp 2.jpg";
import rug7 from "../assets/rugs/rug 12.jpg";

export default function ProductsList() {
  const { category } = useParams();
  const selectedCategory = categories.find(
    (c) => c.name === category?.toLowerCase()
  );
  const popularProducts = selectedCategory?.popularProducts;
  const subcategories = selectedCategory?.subcategory;

  const products = useSelector((state) => state.products.products);
  console.log(products);
  const productsByCategory = products.filter(
    (product) => product.category === category
  );
  const [productSubcategory, setSubcategory] = useState(productsByCategory);
  const handleFilterBySubcategories = (subcategory) => {
    if (productsByCategory.subcategory.toLowerCase() === subcategory) {
      const productSub = productsByCategory.filter(
        (product) => product.subcategory.toLowerCase() === subcategory
      );
      setSubcategory(productSub);
    } else {
      setSubcategory(productsByCategory);
    }
  };
  console.log(productSubcategory);
  return (
    <>
      <div className="ml-[244px] mr-[244px] mt-8 ">
        <HeroSlider images={selectedCategory?.images}>
          {category?.toUpperCase()} CATEGORIES
        </HeroSlider>
        <div>
          <h1 className="font-primary text-heading tracking-wide pt-8">
            Most Loved
          </h1>
          <div className="flex  gap-6">
            <div>
              <PopularCard
                isFirstCard={true}
                isNew={true}
                product={popularProducts[0]}
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              {popularProducts?.map((popularProduct, id) =>
                popularProduct.isFirstCard ? null : (
                  <PopularCard
                    isFirstCard={false}
                    isNew={false}
                    product={popularProduct}
                    key={id}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 border-b border-gray-500 my-4"></div>
        <div className="flex justify-around mt-16">
          {subcategories?.map((subcategory, id) => (
            <div
              className="w-32 flex flex-col justify-start items-center"
              key={id}
              onClick={() => handleFilterBySubcategories(subcategory?.name)}
            >
              <div className="h-32 w-32 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-2 outline outline-colorBlack ">
                <img
                  src={subcategory?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 font-secondary text-center text-lg text-colorBlack">
                {subcategory?.name}
              </p>
            </div>
          ))}
        </div>
        <div className=" h-auto flex justify-between items-center mt-14 z-50">
          <div className="flex items-center gap-5">
            <Filter />
            <div>
              <span className="font-secondary font-medium">18019 products</span>
            </div>
          </div>
          <SelectOptions
            selections={[
              "Popular",
              "Lowest price",
              "Highest price",
              "Top customer reviews",
              "Most Recent",
            ]}
          />
        </div>
        <div className="mt-11 grid grid-cols-3 gap-6">
          {productSubcategory.map((product, index) => (
            <ProductCard key={index} isNew={true} product={product} />
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
        <div>
          <h2 className="font-secondary text-[1.5rem]">RECENTLY VIEWED</h2>
          <div className="mt-3 grid grid-cols-4 gap-[3.3rem]">
            <RecentCard isNew={true} image={rug7} />
            <RecentCard isNew={true} image={Pouf1} />
            <RecentCard isNew={true} image={jewelry3} />
            <RecentCard isNew={true} image={lamp1} />
          </div>
        </div>
      </div>
    </>
  );
}
