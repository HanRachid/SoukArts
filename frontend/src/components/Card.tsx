import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
//import images
import star from "../assets/icons/icons8-star-50.png";

export function EcommerceCard({
  isFirstCard,
  image,
}: {
  isFirstCard: boolean;
  image: string;
}) {
  const cardHeight = isFirstCard ? "h-[976px]" : "h-[473px]";
  const cardWidth = isFirstCard ? "w-[574px]" : "w-[404px]";
  const titleSize = isFirstCard ? "text-[1.6rem]" : "text-[1.1rem]";

  const ProductTitle =
    "Beni ourain Custom Moroccan rug - Berber Beni ourain rug - Wool area rug - Handmade rug - Moroccan area rug - Morocco rug";
  return (
    <Card className={`group ${cardWidth} ${cardHeight}`}>
      <CardHeader
        shadow={false}
        floated={false}
        className={`relative ${isFirstCard ? "h-auto" : "h-[700px]"}`}
      >
        <button className="absolute end-4 top-5 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <img
          src={image}
          alt="card-image"
          className={` ${
            isFirstCard ? "h-[754px]" : "h-fit"
          } w-auto object-cover transition duration-500 group-hover:scale-105`}
        />
      </CardHeader>
      <CardBody className="p-0 pl-6 pr-6">
        <div className="mb-2 mt-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className={`font-medium ${titleSize} font-secondary`}
          >
            {ProductTitle.length > 38
              ? ProductTitle.substring(0, 38) + "..."
              : ProductTitle}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography
            color="black"
            className="-mt-2 text-sm font-secondary font-light opacity-70"
          >
            By MarrakechGallery
          </Typography>
          <Typography className="font-medium text-xl font-secondary text-colorGold">
            600DH
          </Typography>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 font-bold text-black">
            <img width="16" height="16" src={star} alt="star" />
            4.7
            <Typography color="blue-gray" className="font-medium text-black">
              (1.5K)
            </Typography>
          </div>
          <Typography className="font-thin text-sm font-secondary text-colorGold">
            <span className="line-through">1700DH</span>(60%)
          </Typography>
        </div>
        <Typography
          color="black"
          className="mt-2 mb-2 text-sm font-secondary font-light opacity-70"
        >
          Free Shipping
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <button
          className={`${
            isFirstCard ? "h-[61px]" : "h-[44px]"
          } block w-full rounded-tr-[10px] rounded-bl-[10px]  bg-colorGold text-white font-secondary text-[1.4rem] font-normal medium transition hover:scale-105`}
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
}
