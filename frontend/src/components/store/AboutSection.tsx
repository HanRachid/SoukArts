import Sales from "../../assets/icons/sales icon.svg?react";
import Follower from "../../assets/icons/Follower icon.svg?react";
import buyerPic from "../../assets/profile pics/Seller-pic.jpg";

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-around items-center">
        <h2 className="font-secondary text-xl tracking-widest">
          ABOUT ISLI & TISLI
        </h2>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Sales className="w-5 h-5" />
              <p className=" font-secondary text-sm text-colorBlack tracking-widest text-left">
                Sales
              </p>
            </div>
            <h2 className="font-secondary text-5xl">432</h2>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Follower className="w-5 h-5" />
              <p className=" font-secondary text-sm text-colorBlack tracking-widest text-left">
                Followers
              </p>
            </div>
            <h2 className="font-secondary text-5xl">328</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-0.5 w-3/4 bg-colorBlack/20"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="font-primary w-1/2 text-4xl tracking-widest text-black text-center leading-relaxed">
            Our story Is unique, just like yours! Let's live it together.
          </h2>
          <div className="flex flex-col gap-5 mt-7 w-1/2">
            <p className=" font-secondary text-base text-colorBlack/70 tracking-wider text-left">
              Isli & Tisli is a small boutique located in Marrakesh, Morocco. It
              was founded in 2006 and is dedicated to producing the highest
              quality of handcrafted goods possible.
            </p>
            <p className=" font-secondary text-base text-colorBlack/70 tracking-wider text-left">
              All of our goods are crafted by a single craftsman. We use
              ethically sourced materials and our goods are fair trade made.
            </p>
            <p className=" font-secondary text-base text-colorBlack/70 tracking-wider text-left">
              "Isli & Tisli was created to help preserve the tradition of the
              Moroccan handcraft. We are the latest chapter in a very old
              story."
            </p>
            <p className=" font-secondary text-base text-colorBlack/70 tracking-wider text-left">
              We hope you enjoy your visit!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 px-[450px]">
          <h2 className="font-secondary text-xl tracking-widest mt-7">
            Shop Owner
          </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
