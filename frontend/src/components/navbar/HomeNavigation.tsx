import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Homenavigation(): React.ReactElement {
  const categories = [
    "Rugs",
    "Poufs",
    "Lamps",
    "Pillows",
    "Shoes",
    "Bags",
    "Jewelry",
  ];
  const styles = ["Modern", "Classic", "Fusion", "Boho"];
  const trending = [
    "Kilim Rug",
    "Raffia Shoes",
    "Leather Bags",
    "Brass Lamps",
    "Rafia Lamps",
  ];

  return (
    <>
      <Menu as={"div" as React.ElementType} className="z-50">
        <div>
          <div className="group flex w-full items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300">
            <span className="z-10 xl:text-[12px] 2xl:text-[16px]">
              <Menu.Button> Shop </Menu.Button>

              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </span>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute right-0 mt-5 z-40">
            <Menu.Items className="relative lg:top-0 top-60 z-50 right-16 flex flex-col lg:flex-row h-auto gap-24 justify-between  mt-2 w-max p-8  origin-top-right rounded-sm  ring-black/5 focus:outline-none  border-t-4 border-b-4 border-colorGold bg-colorBeigeLight  font-secondary text-colorBlack ">
              <div>
                <div className="">
                  <Menu.Item>
                    <button>
                      <div className="group flex w-full items-center px-2 py-2 text-large relative hover:text-colorGold hover:scale-[1.02] transition-all duration-100">
                        <span className=" z-10">
                          Categories
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                        </span>
                      </div>
                    </button>
                  </Menu.Item>
                </div>
                {categories.map((category: string, index: number) => (
                  <div key={index}>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <Link to={"/categories/" + category}>
                          <button
                            className={`${
                              active ? " bg-colorBeige " : "text-gray-900  "
                            } group flex text-colorBlack/80 w-full items-center rounded-md px-2 py-2 hover:scale-[1.02] transition-all duration-75`}
                          >
                            {category}
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </div>
              <div>
                <div className="">
                  <Menu.Item>
                    <button>
                      <div className="group flex w-full items-center px-2 py-2 text-large relative hover:text-colorGold hover:scale-[1.02] transition-all duration-100">
                        <span className=" z-10">
                          Shop by Style
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                        </span>
                      </div>
                    </button>
                  </Menu.Item>
                </div>
                {styles.map((style: string, index: number) => (
                  <div key={index}>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <button
                          className={`${
                            active ? " bg-colorBeige " : "text-gray-900  "
                          } group flex text-colorBlack/80 w-full items-center rounded-md px-2 py-2 hover:scale-[1.02] transition-all duration-75`}
                        >
                          {style}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </div>
              <div>
                <div className="">
                  <Menu.Item>
                    <button>
                      <div className="group flex w-full items-center px-2 py-2 text-large relative hover:text-colorGold hover:scale-[1.02] transition-all duration-100">
                        <span className=" z-10">
                          Trending Search
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                        </span>
                      </div>
                    </button>
                  </Menu.Item>
                </div>
                {trending.map((trend: string, index: number) => (
                  <div key={index}>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <button
                          className={`${
                            active ? " bg-colorBeige " : "text-gray-900  "
                          } group flex text-colorBlack/80 w-full items-center rounded-md px-2 py-2 hover:scale-[1.02] transition-all duration-75`}
                        >
                          {trend}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
                <div className="absolute bottom-0 pb-3">
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <button
                        className={`${
                          active ? " bg-colorBeige " : "text-gray-900"
                        } group flex text-colorBlack/80 w-full items-center gap-3 rounded-md px-2 py-2 text-sm hover:scale-[1.02] transition-all duration-75`}
                      >
                        Shop All
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 330 330"
                          className="w-3"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              id="XMLID_222_"
                              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </>
  );
}
