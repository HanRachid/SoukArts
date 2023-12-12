import banner from "../assets/store/Banner.webp";
import Content from "../components/store/Content";
import InfoStore from "../components/store/InfoStore";

export default function StoreSeller() {
  const { id } = useParams();
  const Products = useSelector((state) => state.products.products);
  return (
    <div className="m-5 ">
      <div className="">
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <InfoStore />
      <Content />
    </div>
  );
}
