import b from "../assets/home/Group 5.png";

export default function Header() {
  return (
    <div className="w-full mt-12">
      <h1 className="text-[5vw] leading-[5vw] relative text-center z-10 -mb-8 font-fontPrimary text-colorBlack">
        Unleashing Moroccan Artistry.
      </h1>
      {/* Carousel Here */}
      <img src={b} className="w-[100vw] z-0" alt="" />
    </div>
  );
}
