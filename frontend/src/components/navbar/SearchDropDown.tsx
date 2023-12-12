import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ProductUrl } from "../../../types";

export default function SearchDropDown({
  products,
  isShowing,
  setSearchTerms,
  setMatchedProducts,
}: {
  products: ProductUrl[];
  isShowing: boolean;
  setMatchedProducts: Function;
  setSearchTerms: Function;
}): React.ReactElement {
  function firstSix(string: string): string {
    return (
      string.split(" ")[0] +
      " " +
      string.split(" ")[1] +
      " " +
      string.split(" ")[2] +
      " " +
      string.split(" ")[3] +
      string.split(" ")[4] +
      string.split(" ")[5]
    );
  }
  return (
    <>
      <Menu as={"div" as React.ElementType} className="z-50">
        <div>
          <div className="group  w-full items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300">
            <span className="z-10 xl:text-[12px] 2xl:text-[16px]">
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
          show={isShowing}
        >
          <div className="absolute right-0 mt-5 z-40">
            <Menu.Items className="relative flex flex-col lg:top-0 top-60 z-50 right-16  h-auto gap-9 tracking-wide justify-between  mt-2 w-max p-8  origin-top-right rounded-sm  ring-black/5 focus:outline-none  border-t-4 border-b-4 border-colorGold bg-colorBeigeLight  font-secondary text-colorBlack  ">
              {products.map((product: ProductUrl, index: number) => (
                <Menu.Item key={index}>
                  <Link
                    to={"/products/product/" + product._id}
                    onClick={() => {
                      setMatchedProducts([]);
                      setSearchTerms("");
                    }}
                    className="hover:text-colorGold"
                  >
                    {firstSix(product.title)}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </>
  );
}
