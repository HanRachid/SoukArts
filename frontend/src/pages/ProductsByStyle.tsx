import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//import images
import classicPic from "../assets/home/ShopByStyle/classic.webp";
import modernPic from "../assets/home/ShopByStyle/Modern.jpg";
import bohoPic from "../assets/home/ShopByStyle/Boho.jpg";
import fusionPic from "../assets/home/ShopByStyle/Fusion.jpg";

const styles: {
  name: string;
  image: string;
}[] = [
  {
    name: "classic",
    image: classicPic,
  },
  {
    name: "modern",
    image: modernPic,
  },
  {
    name: "boho",
    image: bohoPic,
  },
  {
    name: "fusion",
    image: fusionPic,
  },
];

export default function ProductsByyStyle() {
  const { style } = useParams();
  const selectedStyle = styles.find((s) => s.name === style);
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const productsStyle = products.filter(
    (p) => p.style?.toLowerCase() === style
  );
  return (
    <>
      <div className="ml-[244px] mr-[244px] mt-8 ">
        <div className="flex justify-center items-center gap-8">
          <div className="w-[850px] h-[600px] rounded-tl-full rounded-tr-full overflow-hidden outline-offset-8 outline">
            <img
              src={selectedStyle.image}
              alt="image style"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[850px]">
            <h1 className="text-left tracking-widest leading-normal text-9xl font-primary text-colorBlack">
              {selectedStyle.name?.toUpperCase()} STYLE
            </h1>
          </div>
        </div>
        {/* <div className="mt-8 border-b border-gray-500 my-4"></div>
        <div className="flex justify-around mt-16">
          {subcategories?.map((subcategory) => (
            <div className="w-32 flex flex-col justify-start items-center">
              <div className="h-32 w-32 rounded-full border-2 overflow-hidden hover:scale-[1.06] hover:-outline-offset-2 outline-2 outline outline-colorBlack ">
                <img
                  src={subcategory?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 font-secondary text-center text-lg text-colorBlack">
                {subcategory?.name}
              </p>
            </div>
          ))}
        </div>
        <div className=" h-auto flex justify-between items-center mt-14 z-50">
          <div className="flex items-center gap-5">
            <Filter />
            <div>
              <span className="font-secondary font-medium">18019 products</span>
            </div>
          </div>
          <SelectOptions
            selections={[
              "Popular",
              "Lowest price",
              "Highest price",
              "Top customer reviews",
              "Most Recent",
            ]}
          />
        </div>
        <div className="mt-11 grid grid-cols-3 gap-6">
          {/* <ProductCard isNew={true} image={rug6} /> */}
        {/* </div>
        <div className="mt-9 flex justify-center">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
        <div>
          <h2 className="font-secondary text-[1.5rem]">RECENTLY VIEWED</h2>
          <div className="mt-3 grid grid-cols-4 gap-[3.3rem]">
            <RecentCard isNew={true} image={rug7} />
            <RecentCard isNew={true} image={Pouf1} />
            <RecentCard isNew={true} image={jewelry3} />
            <RecentCard isNew={true} image={lamp1} />
          </div>
        </div> */}
      </div>
    </>
  );
}
