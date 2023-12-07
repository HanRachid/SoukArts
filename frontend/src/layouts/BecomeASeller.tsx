import Footer from './Footer';
import HeaderBecomeaseller from '../components/becomeaseller/HeaderBecomeaseller';
import {useEffect, useState} from 'react';
import {store} from '../app/store';
import {router} from '../App';
import {refreshLog} from '../api/auth';
import {Seller, User} from '../../types';
import {useDispatch} from 'react-redux';

export default function BecomeASeller({
  Component,
  activeStep,
}: {
  Component: React.ComponentType;
  activeStep: number;
}): React.ReactElement {
  const dispatch = useDispatch();
  const [seller, setSeller] = useState<Seller>({} as Seller);
  useEffect(() => {
    refreshLog({} as User, dispatch).then((res) => {
      if (res.user) {
        store.dispatch({type: 'user/setUser', payload: res});
      } else {
        router.navigate('/');
      }
    });
  });
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <HeaderBecomeaseller isActive={activeStep} />

        <div className='flex-1 flex flex-col'>
          <Component />
        </div>
        <Footer />
      </div>
    </>
  );
}
