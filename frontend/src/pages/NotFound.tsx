import yourImage from '../assets/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-20">
      <img src={yourImage} alt="Not Found" className="max-w-xs md:max-w-md" />
      <Link to="/" className="mt-6 px-8 py-2 bg-colorGold text-white hover:scale-[1.02] rounded-tr-lg rounded-bl-lg transition duration-300 font-secondary">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
