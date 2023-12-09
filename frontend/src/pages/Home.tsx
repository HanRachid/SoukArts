import Header from "../components/home/Header";
import FeaturesShop from "../components/home/FeaturesShop";
import Categories from "../components/home/Categories";
import ShopByStyle from "../components/home/HorizantalShopByStyle";
import PopularProducts from "../components/home/PopularProducts";
import EarningWithSukarts from "../components/home/EarnWithSoukarts";
import AboutSoukarts from "../components/home/AboutSoukarts";
import OurValues from "../components/home/OurValues";

export default function Home() {
  return (
    <>
      <Categories />
      <Header />
      <FeaturesShop />
      <ShopByStyle />
      <PopularProducts />
      <EarningWithSukarts />
      <AboutSoukarts />
      <OurValues />
    </>
  );
}
