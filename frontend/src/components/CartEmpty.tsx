import cartEmpty from "../assets/icons/cartEmpty.png";

const CartEmpty = () => {
  return (
    <div className="h-96 flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="relative w-28 h-28 bg-colorBeige rounded-full mx-auto flex justify-center items-center">
          <img
            src={cartEmpty}
            alt="cartEmpty"
            className="w-16 h-16 absolute right-4"
          />
        </div>
        <div>
          <p className="text-center font-bold text-large mt-5">
            Your cart is currently empty
          </p>
          <p className="text-center">
            Explore our amazing selection of products
          </p>
        </div>
        <div className="text-center mt-5">
          <button className="bg-colorGold text-colorLight rounded-tr-lg rounded-bl-lg py-2 px-6">
            See products
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
