export default function AboutSoukarts() {
  return (
    <div className="px-32 py-28">
      <div className="flex w-full items-center mb-12">
        <h1 className="font-secondary w-2/5 text-heading uppercase">
          <span className="block tracking-widest">About</span>
          <span className="font-primary tracking-widest">SOUK ARTS</span>
        </h1>
        <span className="w-[12px] h-28 bg-colorGold"></span>
        <p className="font-secondary text-medium w-3/5 pl-8 pr-32">
          Welcome to Souk Arts, the vibrant marketplace where creativity thrives
          and artisans flourish. We are passionate about connecting Moroccan
          craftsmen and artists with a platform to showcase their extraordinary
          talents and share their authentic works with the world.
        </p>
      </div>
      <div className="w-full flex gap-x-8">
        <section className="relative px-10 py-4 w-full border-2 border-black rounded-b-3xl">
          <div className="absolute w-full h-4 left-0 -top-2 bg-colorBeige"></div>
          <h1 className="uppercase tracking-widest text-large mb-5">
            <span className="block font-secondary mb-2">fOR</span>
            <span className="font-primary">Our Shoppers</span>
          </h1>
          <p className="">
            For art enthusiasts and shoppers, Souk Arts is a virtual gateway to
            discover the finest handcrafted treasures. Uncover one-of-a-kind
            pieces that reflect the rich tapestry of Moroccan artistry and
            support talented artisans directly. Dive into a world of creativity,
            where every purchase contributes to the livelihood of these skilled
            craftsmen and the preservation of their cultural heritage.
          </p>
        </section>
        <section className="relative px-10 py-4 w-full border-2 border-black rounded-b-3xl">
          <div className="absolute w-full h-4 left-0 -top-2 bg-colorGold"></div>
          <h1 className="uppercase tracking-widest text-large mb-5">
            <span className="block font-secondary mb-2">fOR</span>
            <span className="font-primary">Our Shoppers</span>
          </h1>
          <p className="">
            For art enthusiasts and shoppers, Souk Arts is a virtual gateway to
            discover the finest handcrafted treasures. Uncover one-of-a-kind
            pieces that reflect the rich tapestry of Moroccan artistry and
            support talented artisans directly. Dive into a world of creativity,
            where every purchase contributes to the livelihood of these skilled
            craftsmen and the preservation of their cultural heritage.
          </p>
        </section>
       
      </div>
    </div>
  );
}
