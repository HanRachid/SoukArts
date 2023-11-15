import Header from "../components/Header";
import FeaturesShop from "../components/FeaturesShop";
import Categories from "../components/Categories";
import ShopByStyle from "../components/ShopByStyle";
import PopularProducts from "../components/PopularProducts";
import EarningWithSukarts from "../components/EarningWithSukarts";
import AboutSoukarts from "../components/AboutSoukarts";
import OurValues from "../components/OurValues";

export default function Home() {
  return (
    <div className="bg-colorBeigeLight">
      <Categories />
      <Header />
      <FeaturesShop />
      <ShopByStyle />
      <PopularProducts />
      <EarningWithSukarts />
      <AboutSoukarts/>
      <OurValues/>
    </div>
  );
}
