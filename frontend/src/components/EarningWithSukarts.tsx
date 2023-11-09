import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import video from "../assets/home/video.png";

export default function EarningWithSukarts() {
  return (
    <div className="flex justify-center items-center px-40">
      <div className="w-1/2 pr-32">
        <h1 className="font-medium text-6xl text-colorBrown font-secondary leading-tight">
          Start Earning with <br />
          <span className="font-primary">SOUK ARTS</span>
        </h1>

        <p className="w-full font-secondary pt-10 font-medium">
          Unlock your earning potential with Souk Arts and become a thriving
          creative entrepreneur. Sell your unique designs to a global audience,
          reaching millions of buyers, or showcase and promote talented artists
          on Souk Arts to earn lucrative rewards!
        </p>

        <div className="flex gap-5 py-16 w-full h-auto">
          <button className=" w-1/2 border-2 border-colorBrown rounded-bl-xl rounded-tr-xl">
            <span className="text-colorBrown w-full">Open a Shop</span>
          </button>
          <button className="h-14 w-1/2 bg-colorGold rounded-bl-xl rounded-tr-xl">
            <span className="text-white w-full">
            Become an Affiliate
            </span>
          </button>
        </div>
      </div>
      <div className="w-1/2 h-auto flex items-center justify-center border-4 rounded-3xl overflow-hidden border-colorBrown">
      <AiOutlinePlayCircle className="absolute text-white text-9xl"/>
  <img src={video} alt="" className=" h-auto"/>
</div>
    </div>
  );
}
