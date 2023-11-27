// import { useParams } from "react-router-dom";
import {CarouselProduct} from '../components/CarouselProduct';
import DetailsProduct from '../components/ProductDetails';
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
    <div className='ml-[120px] mr-[120px] mt-24 flex gap-11'>
      <div>
        <CarouselProduct images={carousel} />
      </div>
      <div>
        <DetailsProduct />
      </div>
    </div>
  );
}
