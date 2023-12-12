import CarouselProduct from "../components/productdetails/CarouselProduct";
import ProductDetailsComponent from "../components/productdetails/ProductDetailsComponent";
import ReviewsSection from "../components/productdetails/ReviewsSection";
import MoreFromShop from "../components/productdetails/MoreFromShop";
import YouMayLike from "../components/productdetails/YouMayLike";
import PhotoReviews from "../components/productdetails/PhotoReviews";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const Products = useSelector((state) => state.products.products);
  const currentProduct = Products.find((p) => p._id === id);
  console.log(currentProduct);
  // Check if currentProduct has images property
  const images = currentProduct?.images || [];

  // Extract the 'url' property from each object in the 'images' array
  const imageURLs = images.map((image) => image.url);
  return (
    <>
      <section className="mt-24 flex gap-16 justify-center">
        <div className="flex flex-col gap-7 w-[853px]">
          <CarouselProduct images={imageURLs} />
          <div>
            <ReviewsSection />
            <PhotoReviews />
          </div>
        </div>
        <div>
          <ProductDetailsComponent product={currentProduct} />
        </div>
      </section>
      <div className="flex mt-20 justify-center">
        <MoreFromShop />
      </div>
      <div className="flex mt-8 justify-center">
        <YouMayLike />
      </div>
    </>
  );
}
