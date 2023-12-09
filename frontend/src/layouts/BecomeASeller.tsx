import Footer from './Footer';
import HeaderBecomeaseller from '../components/becomeaseller/HeaderBecomeaseller';
import {useState} from 'react';
import {router} from '../App';
import {Seller} from '../../types';
import {useSelector} from 'react-redux';
interface SellerProps {
  seller: Seller;
  setSeller: React.Dispatch<React.SetStateAction<Seller>>;
}
export default function BecomeASeller({
  Component,
  activeStep,
}: {
  Component: React.ComponentType<SellerProps>;
  activeStep: number;
}): React.ReactElement {
  const [seller, setSeller] = useState<Seller>({} as Seller);
  const user = useSelector((state: any) => state.auth.user.user);
  console.log(user);
  if (!user) {
    router.navigate('/login');
  } else if (user!.role! !== 'Client') {
    router.navigate('/');
  }
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <HeaderBecomeaseller isActive={activeStep} />

        <div className='flex-1 flex flex-col'>
          <Component seller={seller} setSeller={setSeller} />
        </div>
        <Footer />
      </div>
    </>
  );
}
