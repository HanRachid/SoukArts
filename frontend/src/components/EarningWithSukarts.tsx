import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import video from "../assets/home/video.png";

export default function EarningWithSukarts() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="font-medium text-[80px] text-colorBrown">
          Start Earning with <br />
          <span className="font-primary">SOUK ARTS</span>
        </h1>

        <p>
          Unlock your earning potential with Souk Arts and become a thriving
          creative entrepreneur. Sell your unique designs to a global audience,
          reaching millions of buyers, or showcase and promote talented artists
          on Souk Arts to earn lucrative rewards!
        </p>

        <div >
          <button className="border-2 border-colorBrown rounded-bl-xl rounded-tr-xl">
            <span className="text-colorBrown w-full">Open a Shop</span>
          </button>
          <button className="border-2 rounded-bl-xl rounded-tr-xl">
            <span className="text-white w-full">
            Become an Affiliate
            </span>
          </button>
        </div>
      </div>
      <div>
        <img src={video} alt="" />
        <AiOutlinePlayCircle />
      </div>
    </div>
  );
}
