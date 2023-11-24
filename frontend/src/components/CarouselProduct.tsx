import {useState} from 'react';
import {Carousel} from '@material-tailwind/react';
interface CarouselProductProps {
  images: string[];
}

export function CarouselProduct({images}: CarouselProductProps) {
  let setOutsideActiveIndex: Function;
  let [imageActiveIndex, setImageActiveIndex] = useState<number>(0);

  return (
    <div className='w-[853px]'>
      <Carousel
        className='rounded-xl'
        navigation={({setActiveIndex, activeIndex, length}) => {
          setOutsideActiveIndex = setActiveIndex;
          setImageActiveIndex(activeIndex);
          return (
            <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                  }`}
                  onClick={() => {
                    setImageActiveIndex(i);
                    setActiveIndex(i);
                  }}
                />
              ))}
            </div>
          );
        }}
      >
        {images.map((image, index) => (
          <img
            src={image}
            alt={`image ${index + 1}`}
            className='h-full w-full object-cover'
            key={index}
          />
        ))}
      </Carousel>
      <div className='flex gap-6 mt-7'>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`image ${index + 1}`}
            className={`w-[151px] rounded-md ${
              imageActiveIndex === index ? 'border-2 border-black' : ''
            }`}
            key={index}
            onClick={() => {
              setOutsideActiveIndex(index);
              setImageActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
