import Heart from '../../assets/navbar/heart.svg?react';
import BoutonAdd from '../../assets/favorite/bouton-ajouter.svg?react';

export default function CardFavorite(props: {
  src: string | undefined;
  name: string | undefined;
}) {
  return (
    <>
      <div className='group w-80 h-80 border border-gray-300 rounded-[12px] m-8 max-w-sm relative overflow-hidden'>
        <img
          src={props.src}
          alt={props.name}
          className='w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
        />
        <button className='w-10 h-10 bg-colorLight absolute top-0 rounded-full right-1 m-2 bg-opacity-80'>
          <div className='w-full h-full relative flex items-center justify-center p-[0.55rem]'>
            <Heart className='hover:fill-colorGold w-full relative' />
          </div>
        </button>
        <button className='w-10 h-10 bg-colorLight absolute top-12 rounded-full right-1 m-2 bg-opacity-80'>
          <div className='w-full h-full relative flex items-center justify-center p-[0.55rem]'>
            <BoutonAdd className='hover:fill-colorGold w-full relative' />
          </div>
        </button>
      </div>
    </>
  );
}
