import SuggestionCard from "./SuggestionCard";

//images
import YouMay1 from "../assets/jewelry/YouMay1.jpg";
import YouMay2 from "../assets/jewelry/YouMay2.jpg";
import YouMay3 from "../assets/jewelry/YouMay3.jpg";
import YouMay4 from "../assets/jewelry/YouMay4.jpg";

const YouMayLikePics = [YouMay1, YouMay2, YouMay3, YouMay4];

export default function YouMayLike() {
  return (
    <div>
      <h2 className="font-primary text-extraLarge tracking-wider mb-4">
        You may also like
      </h2>
      <div className="flex gap-10 mb-10">
        {YouMayLikePics.map((YouMayLikePic, id) => (
          <SuggestionCard image={YouMayLikePic} isNew={false} key={id} />
        ))}
      </div>
    </div>
  );
}
