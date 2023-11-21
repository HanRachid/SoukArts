import { useState } from "react";
import FilterIcon from "../assets/icons/filter icon.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const colors: string[] = [
  "Gray",
  "White",
  "Black",
  "Blue",
  "Gold",
  "Silver",
  "Copper",
  "Beige",
  "Black",
  "Bronze",
  "Brown",
  "Green",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "Rose gold",
  "Yellow",
];

export function Filter() {
  const [showMore, setShowMore] = useState(false);
  const displayedColors = showMore ? colors : colors.slice(0, 5);
  return (
    <div className="drawer mt-14">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn  drawer-button bg-colorGold text-white font-secondary tracking-widest rounded-none rounded-tr-[7px] rounded-bl-[7px] w-[148px] hover:bg-colorGold/90 hover:scale-[1.02]"
        >
          <FilterIcon className="bg-transparent text-white w-5 h-5 font-semibold" />
          FILTER
        </label>
      </div>
      <div className="drawer-side bg-colorBeigeLight/68">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          Filters
        </label>
        <ul className="flex flex-col gap-5 p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <h1 className="font-secondary text-4xl mb-7">Filters</h1>
          {/* //Special Offers filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">
              Special offers
            </h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none"
                />
                Free Shipping
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none"
                />
                On Sale
              </div>
            </div>
          </li>
          {/* //Souk Arts best filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">
              Souk Arts' Best
            </h1>
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              Souk Arts' Pick
            </div>
          </li>
          {/* //Ready to ship filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">
              Ready to ship in
            </h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none"
                />
                1 day
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none"
                />
                1–3 days
              </div>
            </div>
          </li>
          {/* //Price filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">
              Price (Dhs)
            </h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Any price
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                under 500 Dhs
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                under 500 Dhs
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                500 Dhs to 2500 Dhs
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                2500 Dhs to 5000 Dhs
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Over 5000 Dhs
              </div>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-xs"
                  />
                  Custom
                </div>
                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    placeholder="Lowest"
                    className="input input-bordered w-24 rounded-sm h-10"
                  />
                  To
                  <input
                    type="text"
                    placeholder="Lowest"
                    className="input input-bordered w-24 rounded-sm h-10"
                  />
                </div>
              </div>
            </div>
          </li>
          {/* //Style filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">Style</h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Modern
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Classic
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Fusion
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Bohemian
              </div>
            </div>
          </li>
          {/* //Color filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">Color</h1>
            <div className="flex flex-col gap-4 items-start">
              {displayedColors.map((color) => (
                <div key={color} className="flex gap-4 items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs rounded-none"
                  />
                  {color}
                </div>
              ))}
              {colors.length > 5 && (
                <button
                  className="flex gap-4 items-center cursor-pointer text-colorBlack font-secondary bg-transparent hover:bg-colorBeige/30 p-3 rounded-3xl hover:scale-[1.02]"
                  onClick={() => setShowMore(!showMore)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  {showMore ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </li>
          {/* //items type filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">
              Items type
            </h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                All items
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Handmade
              </div>
              <div className="flex gap-4 items-center">
                <input type="radio" name="radio-1" className="radio radio-xs" />
                Vintage
              </div>
            </div>
          </li>
          {/* //ordering options filter */}
          <li>
            <h1 className="font-secondary font-medium text-lg mb-4">
              ordering options
            </h1>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none"
                />
                Accepts gift cards
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none"
                />
                Can be gift-wrapped
              </div>
            </div>
          </li>
          <div className="flex gap-4">
            <button className="btn  drawer-button bg-transparent text-colorBlack outline-1 outline- font-secondary tracking-widest rounded-none rounded-tr-[7px] rounded-bl-[7px] w-[108px] hover:bg-colorGold/90 hover:scale-[1.02]">
              cancel
            </button>
            <button className="btn  drawer-button bg-colorGold text-white font-secondary tracking-widest rounded-none rounded-tr-[7px] rounded-bl-[7px] w-[148px] hover:bg-colorGold/90 hover:scale-[1.02]">
              Apply
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
