import Footer from "../layouts/Footer";

import itemImage from "../assets/rugs/rug 10.jpg";
const ReviewPayment = () => {
  return (
    <div>
      <div className="px-4">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-16 mb-16">
          <h2 className="text-2xl font-bold mb-4 font-primary text-center tracking-wider">
            Order Summary
          </h2>

          {/* Product Information */}
          <div className="flex items-center gap-6 mb-4">
            <div>
              <img
                src={itemImage}
                className="w-20 rounded-tr-lg rounded-bl-lg"
                alt="itemimage"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">Order Details</h3>
              <p className="text-gray-600">Custom rug, Fabulous Boujad rug</p>
              <p className="text-gray-600">Primary Color: Brown</p>
              <p className="text-gray-600">Size: 2m sur 3m</p>
            </div>
          </div>

          {/* Order Total */}
          <div className="mb-4">
            <h3 className="text-lg font-bold">Order Total</h3>
            <p className="text-lg text-gray-600">652 DH (including delivery)</p>
          </div>

          {/* Shipping Address */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Shipping Address</h3>
            <p className="text-gray-600">Hira Team</p>
            <p className="text-gray-600">Rue du Caire</p>
            <p className="text-gray-600">10000</p>
            <p className="text-gray-600">Rabat</p>
            <p className="text-gray-600">Morocco</p>
          </div>

          {/* Confirm Order Button */}
          <button className="w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90">
            Confirm Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPayment;
