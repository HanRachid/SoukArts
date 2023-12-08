import backgroundImage from '../../assets/bg/bgGold.png';

const ShopAffiliate = () => {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className='px-5 pb-10 lg:pb-10 lg:px-10 lg:py-12 bg-colorBeigeLight'
      style={bgStyle}
    >
      <div className='flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-center w-full '>
        <div className='flex flex-col justify-center items-center lg:w-6/12 h-56 border-b lg:border-r lg:border-b-transparent border-colorGold gap-2'>
          <h2 className='font-primary text-2xl md:text-3xl tracking-wider'>
            Share SoukArts & earn
          </h2>
          <p className='text-xs md:text-sm tracking-wider'>
            Start sharing to earn 15% on all new customers orders.
          </p>
          <button className='bg-colorGold text-colorLight rounded-tr-lg rounded-bl-lg py-2 px-6 mt-10'>
            Become an affiliate
          </button>
        </div>
        <div className='flex flex-col justify-center items-center lg:w-6/12 gap-2'>
          <h2 className='font-primary text-2xl md:text-3xl tracking-wider'>
            Sell on SoukArts
          </h2>
          <p className='text-xs tracking-wider'>
            Open your shop and sell to millions of buyers.
          </p>
          <button className='bg-colorGold text-colorLight rounded-tr-lg rounded-bl-lg py-2 px-6 mt-10'>
            Open shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopAffiliate;
