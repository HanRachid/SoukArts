

const HomeNavigationMobile = () => {
 
  return (
  
      <div className="absolute z-[999] h-screen overflow-auto w-2/3 left-0 flex flex-col gap-10 p-5 font-secondary bg-colorBeigeLight border-t-4 border-t-colorGold border-b-4 border-b-colorGold">
        <div>
          <h2 className="text-medium mb-2 font-bold">Categories</h2>
          <ul className="flex flex-col gap-3">
            <li>Rugs</li>
            <li>Poufs</li>
            <li>Lamps</li>
            <li>Pillows</li>
            <li>Shoes</li>
            <li>Bags</li>
            <li>Jewelery</li>
          </ul>
        </div>
        <div>
          <h2 className="text-medium mb-2 font-bold">Shop by Style</h2>
          <ul className="flex flex-col gap-3">
            <li>Modern</li>
            <li>Classic</li>
            <li>Fusion</li>
            <li>Boho</li>
          </ul>
        </div>
        <div>
          <h2 className="text-medium mb-2 font-bold">Trending Search</h2>
          <ul className="flex flex-col gap-3">
            <li>Kilim Rug</li>
            <li>Raffia Shoes</li>
            <li>Leather Bags</li>
            <li>Brass Lamps</li>
            <li>Rafia Lamps</li>
          </ul>
        </div>
      </div>
 
  );
};

export default HomeNavigationMobile;
