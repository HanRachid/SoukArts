import { CarouselProduct } from "../components/CarouselProduct";
import DetailsProduct from "../components/ProductDetails";
import ReviewsSection from "../components/ReviewsSection";
import MoreFromShop from "../components/MoreFromShop";
import YouMayLike from "../components/YouMayLike";

//images
import carousel1 from "../assets/jewelry/carousel1.jpg";
import carousel2 from "../assets/jewelry/carousel2.jpg";
import carousel3 from "../assets/jewelry/carousel3.jpg";
import carousel4 from "../assets/jewelry/carousel4.jpg";
import carousel5 from "../assets/jewelry/carousel5.webp";
import PhotoReviews from "../components/PhotoReviews";

const carousel = [carousel1, carousel2, carousel3, carousel4, carousel5];

export default function ProductDetail() {
  // const { product } = useParams();
  return (
    <>
      <div className="mt-24 flex gap-16 justify-center">
        <div className="flex flex-col gap-7 w-[853px]">
          <CarouselProduct images={carousel} />
          <div>
            <ReviewsSection />
            <PhotoReviews />
          </div>
        </div>
        <div>
          <DetailsProduct />
        </div>
      </div>
      <div className="flex mt-8 justify-center">
        <MoreFromShop />
      </div>
      <div className="flex mt-8 justify-center">
        <YouMayLike />
      </div>
    </>
  );
}
