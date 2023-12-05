import AddNewProduct from '../components/products/AddNewProduct';

export default function Shop() {
  return <div className='m-10'>
    <div className='mt-10 mb-20'>
      <h2 className='text-center font-primary text-large lg:text-extraLarge'>
        Lising
      </h2>

    </div>
    <AddNewProduct />

  </div>;
}
