import { Link } from "react-router-dom";

const ProductTitle =
  "Beni ourain Custom Moroccan rug - Berber Beni ourain rug - Wool area rug - Handmade rug - Moroccan area rug - Morocco rug";

export default function ProductCard({
  isFirstCard,
  image,
}: {
  isFirstCard: boolean;
  image: string;
}) {
  const cardHeight = isFirstCard ? "h-20" : "h-[500px]";
  const cardWidth = isFirstCard ? "w-[600px]" : "w-[300px]";
  return (
    <Link
      to="#"
      className={`group relative overflow-hidden ${cardWidth} ${cardHeight} font-secondary pt-5 flex flex-col`}
    >
      <button className="absolute end-4 top-14 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
        alt="product-image"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-2">
        <span className="whitespace-nowrap bg-colorGold px-3 py-1.5 text-xs font-medium text-white">
          New
        </span>

        <h3
          className="mt-4 text-lg font-[24px] text-gray-900 tooltip"
          data-tip={ProductTitle}
        >
          {ProductTitle.length > 30
            ? ProductTitle.substring(0, 29) + "..."
            : ProductTitle}
        </h3>
        <div className="flex justify-between">
          <h4 className="mt-4 text-small font-light text-black-900 opacity-70 font-secondary">
            By MarrakechGallery
          </h4>

          <p className="mt-4 text-sm text-colorGold">600 DH</p>
        </div>
        <form className="mt-4">
          <button className="block w-full rounded bg-colorGold text-white p-4 text-sm font-normal medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
}
