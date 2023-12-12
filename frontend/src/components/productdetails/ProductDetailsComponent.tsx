import profilShop from "../../assets/jewelry/shop image.webp";
import { Button, ConfigProvider } from "antd";
import star from "../../assets/icons/icons8-star-50.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BasicAccordion from "./Accordion";
import { Link } from "react-router-dom";
interface Product {
  title: string;
  seller_id: {
    shop_name: string;
  };
  price: number;
}
export default function ProductDetailsComponent({
  product,
}: {
  product: Product;
}) {
  const numberOfStars = 5;
  const starsArray = Array(numberOfStars).fill(null);
  return (
    <div className="flex flex-col gap-11 justify-start ">
      <h1 className="font-secondary text-3xl tracking-widest w-[502px] line leading-relaxed">
        {product.title}
      </h1>
      <div className=" flex justify-start items-center gap-4">
        <div className="h-14 w-14 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-1 outline outline-colorBlack ">
          <img src={profilShop} alt="shop image" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Link to={"/shop"}>
            <p className=" font-secondary text-center text-base text-colorBlack tracking-widest hover:cursor-pointer hover:text-colorGold">
              {product.seller_id.shop_name}
            </p>
          </Link>
          <div className="flex gap-2">
            {starsArray.map((_, index) => (
              <img key={index} width="17" height="17" src={star} alt="star" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <h1 className="font-secondary text-colorGold text-6xl tracking-widest">
            {`${product.price * 0.4}DH`}
          </h1>
          <p className="line-through text-lg font-secondary text-colorGold tracking-widest">
            {`${Math.floor(product.price)}DH`}
          </p>
        </div>
        <p className="font-secondary text-colorGold text-lg tracking-widest">
          60% OFF SALE ENDS NOVEMBER 26
        </p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCheck} className="text-colorGold" />
          <p className="font-secondary text-colorBlack tracking-wide">
            Arrives soon! Get it by Nov 29-Dec if you order today
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCheck} className="text-colorGold" />
          <p className="font-secondary text-colorBlack tracking-wide">
            Returns & exchanges accepted
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimaryHover: "#B48F58",
                colorPrimary: "#000",
                colorPrimaryActive: "#B48F58",
                primaryColor: "#fff",
                colorBgContainer: "#B48F58",
              },
            },
          }}
        >
          <Button
            type="default"
            className="relative group h-11 w-[243px] text-sm bg-transparent text-colorBlack outline-1 border-colorBlack border font-secondary tracking-wide rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:scale-[1.02] hover:tracking-widest hover:border-[1.5px] hover:font-medium"
          >
            Buy Now
          </Button>

          <button className="h-11 w-[243px] bg-colorGold text-white font-secondary tracking-widest rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:bg-colorGold/90 hover:scale-[1.02]">
            Add to cart
          </button>
        </ConfigProvider>
      </div>
      <div className="w-full h-[1px] bg-colorBlack/20 "></div>
      <BasicAccordion product={product} />
    </div>
  );
}
