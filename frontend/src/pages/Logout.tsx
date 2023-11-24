import {useEffect} from 'react';
import {router} from '../App';

export default function Logout() {
  useEffect(() => {
    router.navigate('/');
  });
  return <div> You are being redirected .... </div>;
}
