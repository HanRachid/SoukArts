import { Typography } from "@material-tailwind/react";

export default function AboutSoukarts() {
  return (
    <div className="lg:px-40 py-28 px-16">
      <div className="flex lg:flex-row flex-col w-full lg:items-center mb-12">
        <div className="flex items-end justify-start">
          <h1 className="font-secondary lg:text-[3rem] text-[2rem] uppercase lg:pr-16 pr-8 text-colorBrown">
            <span className="block tracking-widest">About</span>
            <span className="font-primary tracking-widest">SOUK ARTS</span>
          </h1>
          <span className="w-[12px]  lg:h-40 h-24 bg-colorGold"></span>
        </div>
        <Typography
          variant="paragraph"
          color="gray"
          className="font-secondary lg:w-8/12 lg:pl-8 lg:pr-32 lg:pt-0 pt-8"
        >
          Welcome to Souk Arts, the vibrant marketplace where creativity thrives
          and artisans flourish. We are passionate about connecting Moroccan
          craftsmen and artists with a platform to showcase their extraordinary
          talents and share their authentic works with the world.
        </Typography>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-8">
        <section className="relative px-10 w-full border-2 border-gray-900 rounded-b-3xl overflow-hidden py-16">
          <div className="absolute w-full h-6 left-0 -top-2 bg-colorBeige"></div>
          <h1 className="uppercase tracking-widest text-large mb-5">
            <span className="block font-secondary mb-2">fOR</span>
            <span className="font-primary text-[2rem]">Our Shoppers</span>
          </h1>
          <Typography variant="paragraph" color="gray" className="font-secondary">
            For art enthusiasts and shoppers, Souk Arts is a virtual gateway to
            discover the finest handcrafted treasures. Uncover one-of-a-kind
            pieces that reflect the rich tapestry of Moroccan artistry and
            support talented artisans directly. Dive into a world of creativity,
            where every purchase contributes to the livelihood of these skilled
            craftsmen and the preservation of their cultural heritage.
          </Typography>
        </section>
        <section className="relative px-10 w-full border-2 border-gray-900 rounded-b-3xl overflow-hidden py-16">
          <div className="absolute w-full h-6 left-0 -top-2 bg-gold-400"></div>
          <h1 className="uppercase tracking-widest text-large mb-5">
            <span className="block font-secondary mb-2">fOR</span>
            <span className="font-primary text-[2rem]">Our Shoppers</span>
          </h1>
          <Typography variant="paragraph" color="gray" className="font-secondary">
            For art enthusiasts and shoppers, Souk Arts is a virtual gateway to
            discover the finest handcrafted treasures. Uncover one-of-a-kind
            pieces that reflect the rich tapestry of Moroccan artistry and
            support talented artisans directly. Dive into a world of creativity,
            where every purchase contributes to the livelihood of these skilled
            craftsmen and the preservation of their cultural heritage.
          </Typography>
        </section>
      </div>
    </div>
  );
}
