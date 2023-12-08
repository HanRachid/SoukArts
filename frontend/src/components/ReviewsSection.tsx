import star from "../assets/icons/icons8-star-50.png";
import TabsReview from "./TabsReview";

export default function ReviewsSection() {
  const numberOfStars = 5;
  const starsArray = Array(numberOfStars).fill(null);

  return (
    <>
      <div className="flex gap-5 items-center">
        <h1 className="font-secondary text-3xl text-colorBlack tracking-wide mb-3">
          2,961 reviews
        </h1>
        <div className="flex gap-2">
          {starsArray.map((_, index) => (
            <img key={index} width="24" height="24" src={star} alt="star" />
          ))}
        </div>
      </div>
      <div>
        <TabsReview />
      </div>
    </>
  );
}
