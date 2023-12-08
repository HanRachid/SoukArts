import SuggestionCard from "./SuggestionCard";

//icons
import { GoChevronRight } from "react-icons/go";
//images
import MoreCard1 from "../assets/jewelry/MoreCard1.webp";
import MoreCard2 from "../assets/jewelry/MoreCard2.webp";
import MoreCard3 from "../assets/jewelry/MoreCard3.webp";
import MoreCard4 from "../assets/jewelry/MoreCard4.webp";

const MoreCards = [MoreCard1, MoreCard2, MoreCard3, MoreCard4];

export default function MoreFromShop() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-primary text-extraLarge tracking-wider mb-4">
          More from this shop
        </h2>
        <button className="group flex gap-2 items-center hover:text-colorGold">
          <span className="text-colorBlack text-lg font-secondary hover:text-colorGold">
            See More
          </span>
          <GoChevronRight className="h-6 w-auto" />
        </button>
      </div>
      <div className="flex gap-10">
        {MoreCards.map((MoreCard, id) => (
          <SuggestionCard image={MoreCard} isNew={false} key={id} />
        ))}
      </div>
    </div>
  );
}
