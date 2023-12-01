import ButtonOutlined from "../ButtonOutlined";

import storePic from "../../assets/store/Store pic.webp";
import buyerPic from "../../assets/profile pics/Seller-pic.jpg";
import star from "../../assets/icons/icons8-star-50.png";
import Heart from "../../assets/navbar/heart.svg?react";
import Message from "../../assets/icons/message-white.svg?react";
import Message1 from "../../assets/icons/message.svg?react";
import Shipping from "../../assets/icons/fast-delivery-truck-svgrepo-com.svg?react";
import Sales from "../../assets/icons/sales icon.svg?react";
import Follower from "../../assets/icons/Follower icon.svg?react";

export default function InfoStore() {
  const numberOfStars = 5;
  const starsArray = Array(numberOfStars).fill(null);
  return (
    <>
      <div className="flex flex-col items-center w-full h-80 bg-colorBeige/40 ">
        <div className="relative -top-7">
          <div className="z-10 w-44 h-44 rounded-2xl bg-[#E7DFDB]">
            <img
              src={storePic}
              alt="store pic"
              className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-2xl shadow-md "
            />
          </div>
        </div>
        <div className=" relative flex flex-col justify-center items-center gap-2 -top-4">
          <h2 className=" font-primary text-large text-center tracking-widest">
            Isli & Tisli
          </h2>
          <div className="flex items-center gap-2">
            <p className="font-secondary text-sm tracking-widest">320 Sales</p>
            <div className="flex gap-2">
              {starsArray.map((_, index) => (
                <img key={index} src={star} alt="star" className="w-4 h-4" />
              ))}
            </div>
          </div>
          <p className="font-secondary text-sm tracking-widest">
            Marrakesh, Marrakesh-Safi
          </p>
          <p className="font-secondary text-sm tracking-widest">
            Creativity, Originality , Novelty, Quality
          </p>
        </div>
        <div className="relative divider">
          <div className="flex justify-center items-center gap-3">
            <ButtonOutlined>
              <div className=" flex gap-2 items-center justify-center">
                <Heart className="w-4 h-4 group-hover:scale-105 group-hover:fill-colorGold " />
                <p className="font-secondary tracking-widest text-base">
                  Follow Shop
                </p>
              </div>
            </ButtonOutlined>
            <div className="w-48 h-[2px] bg-colorBlack/20"></div>
            <button className="h-11 w-full bg-colorGold text-base text-white font-secondary tracking-widest rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:bg-colorGold/90 hover:scale-[1.02]">
              <div className=" flex gap-2 items-center justify-center">
                <Message className="w-4 h-4" />
                <p className="font-secondary tracking-widest text-base">
                  Contact Seller
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="my-9 flex gap-8 items-center justify-between ">
        <div className=" flex justify-start items-center gap-4">
          <div className="h-16 w-16 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-1 outline outline-colorBlack ">
            <img
              src={buyerPic}
              alt="shop image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className=" font-secondary text-center text-base text-colorBlack tracking-widest">
              Owner
            </p>
            <p className=" font-secondary text-center text-base text-colorBlack tracking-widest">
              Meryam
            </p>

            <div className=" group flex gap-2 items-center justify-center hover:scale-105 cursor-pointer">
              <Message1 className="w-3 h-3" />
              <p className="font-secondary tracking-widest text-xs">Contact</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shipping className="w-10 h-10" />
          <p className=" font-secondary text-sm text-colorBlack tracking-widest text-left">
            Smooth shipping Has a history of shipping <br></br>on time with
            tracking.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Sales className="w-5 h-5" />
            <p className=" font-secondary text-sm text-colorBlack tracking-widest text-left">
              432 Sales
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Follower className="w-5 h-5" />
            <p className=" font-secondary text-sm text-colorBlack tracking-widest text-left">
              328 followers
            </p>
          </div>
        </div>
      </div>
      <div className="divider my-9">
        <h2 className="font-primary text-3xl tracking-widest text-black">
          Announcement
        </h2>
      </div>
      <div className="my-9">
        <p className=" font-secondary text-lg text-colorBlack tracking-widest text-center">
          Welcome to isli & tisli ! Check out our leather and raffia shoes and
          bags, we make personalized gifts and also have a wholesaling service
          please feel free to contact us.
        </p>
      </div>
    </>
  );
}
