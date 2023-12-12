import React from "react";

import vector from "../../assets/home/Vector.png";
import vector2 from "../../assets/home/vector2.png";
import vector3 from "../../assets/home/vector3.png";
import { Typography } from "@material-tailwind/react";

const values = [
  {
    title: "Authenticity",
    description:
      "We prioritize the genuine craftsmanship and unique stories behind each art piece, promoting the beauty of authentic, handcrafted products.",
    image: vector,
  },
  {
    title: "Community",
    description:
      "We foster a supportive and inclusive community of artists, craftsmen, and art enthusiasts, encouraging collaboration, knowledge sharing, and networking.",
    image: vector2,
  },
  {
    title: "Quality",
    description:
      "We maintain high standards of quality, curating and promoting exceptional and original works of art that buyers can trust and appreciate.",
    image: vector3,
  },
];

export default function OurValues() {
  return (
    <div className="lg:px-20 md:px-8 px-4 mb-52 font-secondary">
      <div className="flex items-center justify-center pb-16">
        <div className="px-20 h-[1px] bg-black-400 w-full" />
        <h1 className="uppercase text-center text-[3rem] tracking-widest px-16 text-black-950">
          <span className="font-secondary block font-medium">our</span>
          <span className="font-primary font-semibold">values</span>
        </h1>
        <div className="px-20 h-[1px] bg-black-400 w-full" />
      </div>
      <section className="flex lg:flex-row flex-col justify-between items-center gap-10">
        {values.map((value, index) => (
          <div key={index}>
            <div className="flex items-center h-32">
              <h2 className="text-large tracking-widest text-black-950 font-secondary">{value.title}</h2>
              <img src={value.image} alt="" className="ml-12" />
            </div>
            <Typography variant="paragraph" color="gray" className="pr-16 font-secondary">{value.description}</Typography>
          </div>
        ))}
      </section>
    </div>
  );
}