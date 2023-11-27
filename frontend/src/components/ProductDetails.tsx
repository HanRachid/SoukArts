import profilShop from "../assets/jewelry/shop image.webp";
import star from "../assets/icons/icons8-star-50.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function DetailsProduct() {
  const numberOfStars = 5;
  const starsArray = Array(numberOfStars).fill(null);
  return (
    <div className="flex flex-col gap-11 justify-start ">
      <h1 className="font-secondary text-3xl tracking-widest">
        Silver EARRINGS - BERBER CRAFTSMANSHIP- BOHO ETHNIC BOHO JEWELRY
      </h1>
      <div className=" flex justify-start items-center gap-4">
        <div className="h-14 w-14 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-1 outline outline-colorBlack ">
          <img src={profilShop} alt="shop image" className="w-full h-full" />
        </div>
        <p className=" font-secondary text-center text-base text-colorBlack tracking-widest">
          Bohodreamlandcom
        </p>
        <div className="flex gap-2">
          {starsArray.map((_, index) => (
            <img key={index} width="17" height="17" src={star} alt="star" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <h1 className="font-secondary text-colorGold text-6xl tracking-widest">
            282DHS
          </h1>
          <p className="line-through text-lg font-secondary text-colorGold tracking-widest">
            376DHS
          </p>
        </div>
        <p className="font-secondary text-colorGold text-lg tracking-widest">
          25% OFF SALE ENDS NOVEMBER 26
        </p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCheck} className="text-colorGold" />
          <p className="font-secondary text-colorBlack tracking-wide">
            Arrives soon! Get it by Nov 29-Dec 5 if you order today
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCheck} className="text-colorGold" />
          <p className="font-secondary text-colorBlack tracking-wide">
            Returns & exchanges accepted
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="relative group h-11 w-32 bg-transparent text-colorBlack outline-1 border-colorBlack border font-secondary tracking-wide rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:scale-[1.02] overflow-hidden">
          <span className="absolute block bg-colorBlack left-0 top-0 w-full h-[1px] origin-left"></span>
          <span className="absolute block bg-colorBlack left-0 top-0 w-[1px] h-full origin-top"></span>
          Buy Now
        </button>
        <button className="h-11 w-32 bg-colorGold text-white font-secondary tracking-widest rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:bg-colorGold/90 hover:scale-[1.02]">
          Add to cart
        </button>
      </div>
    </div>
  );
}