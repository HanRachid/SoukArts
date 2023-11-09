import Header from "../components/Header";
import FeaturesShop from "../components/FeaturesShop";
import Categories from "../components/Categories";
import ShopByStyle from "../components/ShopByStyle";
import PopularProducts from "../components/PopularProducts";

export default function Home() {
  return <div> 
    <Categories/>
    <Header/>
      <FeaturesShop/>
      <ShopByStyle/>
      <PopularProducts/>
      
     </div>;
}
