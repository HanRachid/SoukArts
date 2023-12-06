import vector from '../../assets/home/Vector.png';
import vector2 from '../../assets/home/vector2.png';
import vector3 from '../../assets/home/vector3.png';

export default function OurValues() {
  return (
    <div className='px-20'>
      <div className=' flex items-center justify-center pb-20'>
        <div className=' px-20 h-[1px] bg-black w-full' />
        <h1 className='uppercase text-center text-large tracking-widest   p-10'>
          <span className='font-primary block font-semibold'>our</span>
          <span className='font-primary font-semibold'>values</span>
        </h1>
        <div className=' px-20 h-[1px] bg-black w-full' />
      </div>
      <section className='flex gap-x-40'>
        <div className=''>
          <div className='flex gap-10 items-center pb-5'>
            <h2 className='text-large tracking-widest'>Authenticity</h2>
            <img src={vector} alt='' />
          </div>
          <p>
            We prioritize the genuine craftsmanship and unique stories behind
            each art piece, promoting the beauty of authentic, handcrafted
            products.
          </p>
        </div>
        <div>
          <div className='flex gap-10 items-center pb-5'>
            <h2 className='text-large tracking-widest'>Community</h2>
            <img src={vector2} alt='' />
          </div>
          <p>
            We foster a supportive and inclusive community of artists,
            craftsmen, and art enthusiasts, encouraging collaboration, knowledge
            sharing, and networking.
          </p>
        </div>
        <div>
          <div className='flex gap-10 items-center pb-5'>
            <h2 className='text-large tracking-widest'>Quality</h2>
            <img src={vector3} alt='' />
          </div>
          <p>
            We maintain high standards of quality, curating and promoting
            exceptional and original works of art that buyers can trust and
            appreciate.
          </p>
        </div>
      </section>
    </div>
  );
}
