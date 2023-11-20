import {router} from '../App';

export default function Logout() {
  router.navigate('/');
  return <div> You are being redirected .... </div>;
}
