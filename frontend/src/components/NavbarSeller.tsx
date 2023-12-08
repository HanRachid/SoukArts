import logolight from "../assets/logolight.svg";
import { Link } from "react-router-dom";
import lens from "../assets/navbar/lens.svg";
import { useState } from "react";
import SearchBar from "./SearchBar";
import HomeNavigationMobile from "../components/HomeNavigationMobile";
import HeartSVG from "../assets/navbar/heart.svg?react";
import CartSVG from "../assets/navbar/cart.svg?react";
import Button from "./Button";
import NavigationSeller from "./NavigationSeller";

const NavbarSeller = () => {
  
  const [showShop, setShowShop] = useState(false);
  const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

  const toggleSearchbar = () => {
    setIsSearchbarVisible(!isSearchbarVisible);
  };

  return (
    <>
      {showShop && (
        <>
          <div
            onClick={() => setShowShop(false)}
            className="z-[900] w-screen h-screen absolute bg-colorBlack opacity-50 backdrop-blur-md"
          ></div>
          <div className="z-[999]">
            <HomeNavigationMobile />
          </div>
        </>
      )}
   
        <div className="navbar flex justify-between items-center !pt-0 !pb-0 px-4 max-w-full xl:h-24 bg-transparent border-b-2 border-colorBlack">
          <div className="navbar-start relative xl:block hidden w-1/3">
            <SearchBar />
          </div>

          <div className="navbar-start relative block xl:hidden xl:h-16">
            <div
              onClick={toggleSearchbar}
              className={`w-10 h-10 rounded-md ${
                isSearchbarVisible ? "hover:bg-colorBeigeLight" : ""
              } flex justify-center items-center`}
            >
              <img src={lens} className="w-5 h-5 opacity-90" alt="lens" />
              {isSearchbarVisible && (
                <div className="absolute top-20 left-3">
                  <SearchBar />
                </div>
              )}
            </div>
          </div>

          <div className="navbar-center flex items-center xl:h-16">
            <img src={logolight} alt="Logo" className="w-48 xl:w-52 xl:h-16" />
          </div>

          <div className="navbar-end w-1/3 xl:block hidden mt-10 pb-10">
            <NavigationSeller/>
          </div>

          <div className="navbar-end xl:hidden flex justify-end relative">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow rounded-box w-48 -left-32 bg-colorBeigeLight">
                <li>
                  <div className="flex items-center gap-2 h-10">
                    <Link to="/">
                      <HeartSVG className="w-6 font-secondary hover:fill-colorGold" />
                    </Link>
                    <Link to="/">
                      <CartSVG className="w-6 font-secondary hover:fill-colorGold" />
                    </Link>
                  </div>
                </li>

                <li onClick={() => setShowShop(true)}>
                  <p className="flex w-full items-center ml-3 px-2 py-2 text-[16px] font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300">
                    Shop
                  </p>
                </li>

                <li>
                  <Link to="/">
                    <Button className="bg-colorGold text-white text-xs w-fit px-2 py-3 rounded-tr-lg rounded-bl-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-75 ">
                      Save 25%
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default NavbarSeller
