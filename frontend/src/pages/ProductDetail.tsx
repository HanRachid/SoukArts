import CarouselProduct from '../components/productdetails/CarouselProduct';
import ProductDetailsComponent from '../components/productdetails/ProductDetailsComponent';
import ReviewsSection from '../components/productdetails/ReviewsSection';
import MoreFromShop from '../components/productdetails/MoreFromShop';
import YouMayLike from '../components/productdetails/YouMayLike';
import PhotoReviews from '../components/productdetails/PhotoReviews';

//images
import carousel1 from '../assets/jewelry/carousel1.jpg';
import carousel2 from '../assets/jewelry/carousel2.jpg';
import carousel3 from '../assets/jewelry/carousel3.jpg';
import carousel4 from '../assets/jewelry/carousel4.jpg';
import carousel5 from '../assets/jewelry/carousel5.webp';

const carousel = [carousel1, carousel2, carousel3, carousel4, carousel5];

export default function ProductDetail() {
  // const { product } = useParams();
  return (
    <>
      <div className='mt-24 flex gap-16 justify-center'>
        <div className='flex flex-col gap-7 w-[853px]'>
          <CarouselProduct images={carousel} />
          <div>
            <ReviewsSection />
            <PhotoReviews />
          </div>
        </div>
        <div>
          <ProductDetailsComponent />
        </div>
      </div>
      <div className='flex mt-8 justify-center'>
        <MoreFromShop />
      </div>
      <div className='flex mt-8 justify-center'>
        <YouMayLike />
      </div>
    </>
  );
}
